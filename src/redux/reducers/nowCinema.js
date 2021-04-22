import dovod from "../../images/films/dovod/dovod.jpg";
import dovod_poster from "../../images/films/dovod/dovod_poster.jpg";
import nachalo from "../../images/films/nachalo/nachalo.jpg";
import nachalo_poster from "../../images/films/nachalo/nachalo_poster.jpg";
import justice_league from "../../images/films/justice_league/justice_league.jpg";
import justice_league_poster from "../../images/films/justice_league/justice_league_poster.jpg";
import wonder_woman from "../../images/films/wonder_woman/wonder_woman.jpg";
import wonder_woman_poster from "../../images/films/wonder_woman/wonder_woman_poster.jpg";

const nownCinema = () => {
  return [
    {
      id: 1,
      img_afisha: dovod,
      img_poster: dovod_poster,
      alt: "Dovod",
      name: "Довод",
      age: "16+",
      genre: "фантастика, боевик, триллер",
      release: "22 августа",
      productionYear: "2020",
      producer: "Кристофер Нолан",
      budget: "$205 000 000",
      country: "Великобритания, США",
    },
    {
      id: 2,
      img_afisha: nachalo,
      img_poster: nachalo_poster,
      alt: "Nachalo",
      name: "Начало",
      age: "12+",
      genre: "детектив, фантастика, боевик",
      release: "8 июля",
      productionYear: "2010",
      producer: "Кристофер Нолан",
      budget: "$160 000 000",
      country: "Великобритания, США",
    },
    {
      id: 3,
      img_afisha: justice_league,
      img_poster: justice_league_poster,
      alt: "justice_league",
      name: "Лига справедливости",
      age: "18+",
      genre: "фантастика, боевик, фэнтези",
      release: "18 марта",
      productionYear: "2021",
      producer: "Зак Снайдер",
      budget: "$370 000 000",
      country: "США, Великобритания",
    },
    {
      id: 4,
      img_afisha: wonder_woman,
      img_poster: wonder_woman_poster,
      alt: "wonder_woman",
      name: "Чудо-женщина: 1984",
      age: "12+",
      genre: "фентези, боевик, приключения",
      release: "16 декабря",
      productionYear: "2020",
      producer: "Пэтти Дженкинс",
      budget: "$200 000 000",
      country: "США, Великобритания, Испания",
    },
  ];
};

export default nownCinema;
