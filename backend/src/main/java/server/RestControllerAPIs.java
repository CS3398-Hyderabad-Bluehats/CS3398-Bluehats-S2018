package server;

package com.javasampleapproach.mongodb.controller;

import java.io.IOException;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
 
import com.mongodb.gridfs.GridFSDBFile;
 
@RestController
public class RestControllerAPIs {
 
	@Autowired
	GridFsOperations gridOperations;
 
	@GetMapping(value = "/api/image")
    public ResponseEntity<InputStreamResource> getImage(@RequestParam("name") String imageName) throws IOException {
		// get file from MongoDB
		GridFSDBFile imageFile = gridOperations.findOne(new Query(Criteria.where("filename").is(imageName)));
			
        return ResponseEntity
                .ok()
                .contentType(MediaType.valueOf(imageFile.getContentType()))
                .body(new InputStreamResource(imageFile.getInputStream()));
    }
}
