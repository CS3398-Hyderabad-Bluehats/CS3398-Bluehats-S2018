package jbr.springmvc.model;

public class CommentHistory {
  private ArrayList commentList;

  public ArrayList getCommentList() {
   return commentList;
  }
 
  public void setList(ArrayList commentList) {
   this.commentList = commentList;
  }

  public void addEntry(comment newComment) {commentList.add(newComment)}
}
