package com.fpt.pawfund.service;

import com.fpt.pawfund.model.News;
import com.fpt.pawfund.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NewsService {

    @Autowired
    private NewsRepository newsRepository;

    public News createNews(News news) {
        return newsRepository.save(news);
    }


    public News getNewsById(int id) {
        return newsRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("News not found with ID: " + id));
    }

    public List<News> getAllNews() {
        return newsRepository.findAll();
    }
}
