import React, { useEffect, useState } from "react";
import ArticleCard from "../elements/ArticleCard";
import useScrollAppearEffect from "../../assets/js/useScrollAppearEffect";

export default function Articles() {
  const appearStyleTitle = useScrollAppearEffect({
    id: "articles",
    name: "text-header",
  });
  const appearStyleArticle = useScrollAppearEffect({
    id: "articles",
    name: "appear",
  });

  const [myData, setMyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dev.to/api/articles?username=lucassul"
        );
        if (!response.ok) {
          throw new Error("Error! Bad Request!");
        }
        const data = await response.json();
        setMyData(data.slice(0, 4));
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchData();
  }, []);

  const articleCard = myData ? (
    myData.map((article) => (
      <ArticleCard
        key={article.id}
        title={article.title}
        description={article.description}
        date={new Intl.DateTimeFormat("en-US", {
          month: "short",
          year: "numeric",
        })
          .format(new Date(article.published_timestamp.slice(0, 10)))
          .toUpperCase()}
        url={article.url}
        image={article.cover_image}
      />
    ))
  ) : (
    <div class="spinner-border m-2 mt-5" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );

  return (
    <section
      class="container pt-4"
      id="articles"
      style={{ maxWidth: "1200px" }}
    >
      <div className="container ">
        <h2
          class="text-dark montserrat-bold text-uppercase text-center py-3 anime-1"
          style={appearStyleTitle}
        >
          Articles
        </h2>
        <h3 class="fs-5 m-0" style={{ color: "#555", ...appearStyleTitle }}>
          My latest articles
        </h3>
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 p-2 appear"
          style={appearStyleArticle}
        >
          {articleCard}
        </div>
      </div>
    </section>
  );
}
