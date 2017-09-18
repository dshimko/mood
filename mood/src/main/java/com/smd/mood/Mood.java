package com.smd.mood;
import org.springframework.data.annotation.CreatedDate;

        import javax.persistence.*;
        import java.time.LocalDateTime;
        import java.util.Date;

        import static javax.persistence.TemporalType.TIMESTAMP;


@Entity // This tells Hibernate to make a table out of this class
public class Mood {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private Integer mood;

    @CreatedDate
    @Temporal(TIMESTAMP)
    private Date createdDate;


    public Integer getMood() {
        return mood;
    }

    public void setMood(Integer mood) {
        this.mood = mood;
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }    public Date getCreatedDate() {
        return createdDate;
    }
    public void setCreatedDate(Date date) {
        this.createdDate = new Date(System.currentTimeMillis());
    }
}

