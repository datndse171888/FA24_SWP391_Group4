package com.fpt.pawfund.controller;

import com.fpt.pawfund.model.News;
import com.fpt.pawfund.service.NewsService;
import com.fpt.pawfund.model.ResponseData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/news")
public class NewsController {

    @Autowired
    private NewsService newsService;

    @PostMapping("/create")
    public ResponseEntity<ResponseData> createNews(@RequestBody News news) {
        try {
            News createdNews = newsService.createNews(news);
            return ResponseEntity.ok(
                    new ResponseData(100, "Post news information successfully !!", createdNews)
            );
        } catch (Exception e) {
            return ResponseEntity.ok(
                    new ResponseData(500, "Error : " + e.getMessage(), "")
            );
        }
    }


    @GetMapping("/specified/{newsID}")
    public ResponseEntity<ResponseData> getNewsByID(@PathVariable("newsID") int newsID) {
        News news = newsService.getNewsById(newsID);
        return ResponseEntity.ok(
                new ResponseData(100, "Get a news by id: " + news.getNewsID(), news)
        );
    }

    @GetMapping("/all")
    public ResponseEntity<List<News>> getAllNews() {
        List<News>news = newsService.getAllNews();
        return ResponseEntity.ok(news);
    }

}
