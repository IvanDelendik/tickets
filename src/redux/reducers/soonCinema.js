import human_anger from "../../images/films/human_anger/human_anger.jpg";
import human_anger_poster from "../../images/films/human_anger/human_anger_poster.jpg";
import major_thunder from "../../images/films/major_thunder/major_thunder.jpg";
import major_thunder_poster from "../../images/films/major_thunder/major_thunder_poster.jpg";
import avatar from "../../images/films/avatar/avatar.jpg";
import avatar_poster from "../../images/films/avatar/avatar_poster.jpg";

const soonCinema = () => {
  return [
    {
      id: 5,
      img_afisha: human_anger,
      img_poster: human_anger_poster,
      alt: "Human_anger",
      name: "Гнев человеческий",
      age: "18+",
      genre: "боевик, триллер",
      release: "22 апреля",
      productionYear: "2021",
      producer: "Гай Ричи",
      budget: "-",
      country: "Великобритания, США",
    },
    {
      id: 6,
      img_afisha: major_thunder,
      img_poster: major_thunder_poster,
      alt: "major_thunder",
      name: "Майор Гром: Чумной Доктор",
      age: "12+",
      genre: "боевик, криминал, детектив",
      release: "1 апреля",
      productionYear: "2021",
      producer: "Олег Трофим",
      budget: "-",
      country: "Россия",
    },
    {
      id: 7,
      img_afisha: avatar,
      img_poster: avatar_poster,
      alt: "Avatar",
      name: "Аватар 2",
      age: "14+",
      genre: "фантастика, боевик, приключения",
      release: "14 декабря",
      productionYear: "2022",
      producer: "Джеймс Кэмерон",
      budget: "-",
      country: "США",
    },
  ];
};

export default soonCinema;
