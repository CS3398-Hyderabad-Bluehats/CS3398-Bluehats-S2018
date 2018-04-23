package server.Home;

import java.util.ArrayList;

public class ImageLoader implements ImageLoaderInterface {
    private ArrayList<String> imageData;

    ImageLoader() {
        imageData = new ArrayList<String>();
    }

    public boolean addImage(String image) {
        return imageData.add(image);
    }

    public ArrayList<String> getImages() {
        ArrayList<String> images = new ArrayList<String>(imageData);
        return images;
    }
}