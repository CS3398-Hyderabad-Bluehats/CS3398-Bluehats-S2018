package jbr.springmvc.model;
import java.util.ArrayList;

public class CommentHistory {
  private ArrayList<Comment> commentList;

  public ArrayList<Comment> getCommentList() {
   return commentList;
  }
 
  public void setList(ArrayList<Comment> commentList) {
   this.commentList = commentList;
  }

  public void addEntry(Comment newComment) {commentList.add(newComment);}
}
