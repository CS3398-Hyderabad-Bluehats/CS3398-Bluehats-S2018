package server.Home;

import java.util.ArrayList;

public interface ImageLoaderInterface {
    public boolean addImage(String image);
    public ArrayList<String> getImages();
}