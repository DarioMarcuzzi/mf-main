import { useEffect, useState } from "react";
import React from "react";
import "../dist/tailwind.css";
import "../styles.css";

const Root = (myProps) => {
  const [categori, setCategori] = useState([]);
  const [filter, setFilter] = useState("all");
  const [news, setNews] = useState([]);

  console.log(news);

  console.log(myProps);
  useEffect(() => {
    const categorias = getUniqueCategori(myProps.myPropsNews);
    setCategori(categorias);
  }, []);

  useEffect(() => {
    const noticias = getNews(myProps.myPropsNews);
    setNews(noticias);
  }, [filter]);

  const getNews = (arrayNews) => {
    const bank = [];
    if (filter === "all") {
      return arrayNews;
    } else {
      for (let i = 0; i < arrayNews.length; i++) {
        if (arrayNews[i].categori === filter) {
          bank.push(arrayNews[i]);
        } else {
          continue;
        }
      }
      return bank;
    }
  };

  const getUniqueCategori = (namesCategori) => {
    const bank = [];
    for (let i = 0; i < namesCategori.length; i++) {
      if (bank.includes(namesCategori[i].categori)) {
        continue;
      } else {
        bank.push(namesCategori[i].categori);
      }
    }
    return bank;
  };

  console.log(categori);
  return (
    <div className="h-[140vh] w-full">
      <div className="flex justify-center items-center h-1/5">
        <h1 className="font-serif text-8xl">QNEWS</h1>
      </div>
      <div className=" flex justify-center">
        <input type="text" />
        <button>search</button>
      </div>
      <div className="bg-slate-300  justify-around m-5 flex">
        {categori.map((name, index) => (
          <a
            className="hover:bg-slate-500 text-2xl hover:cursor-pointer hover:text-white rounded-md p-4 "
            key={index}
          >
            {name}
          </a>
        ))}
      </div>
      <div className="overflow-y-auto h-4/6">
        {news.map((newsItem, index) => (
          <div className="p-4" key={index}>
            <h1 className="text-2xl font-extrabold">{newsItem.title}</h1>
            <h1 className="m-4">{newsItem.text}</h1>
            {newsItem.urlImage ? (
              <img
                className="rounded-sm"
                src={newsItem.urlImage}
                alt={newsItem.userName}
              />
            ) : (
              <></>
            )}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Root;
