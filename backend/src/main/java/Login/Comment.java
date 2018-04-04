package jbr.springmvc.model;
import java.util.Date;

public class Comment {
  private String text;
  private int voteBalance = 0;
  private Date dateCreated;

  public String getText() {
   return text;
  }
 
  public void setText(String text) {
   this.text = text;
  }
 
  public int getVoteBalance() {
   return voteBalance;
  }
 
  public void setVoteBalance(int value) { this.voteBalance = value; }
 
  public void incrementVoteBalance() { this.voteBalance++; }

  public void decrementVoteBalance() { this.voteBalance--; }

  public Date getDateCreated() {
    return dateCreated;
  }

  public void setDateCreated() {
    this.dateCreated = Date();
  }

}
