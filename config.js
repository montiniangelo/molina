const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoibWFwbW9saW5hY2giLCJhIjoiY2tuaDVyNjBxM2J1cDJycDlmMjJpczN3dyJ9.hoSf2ecIgPRw1R0ih3txRQ",
  CSV: "./data.csv",
  center: [10.234, 47.398],
  zoom: 6,
  title: "Title",
  description:
    "Lorem Ipsum quam lorem Ipsum",
  sideBarInfo: ["Location_Name", "City", "Costruzione", "Url"],
  popupInfo: ["Location_Name"],
  filters: [
    {
      type: "dropdown",
      title: "Tipologia:",
      columnHeader: "Type",
      listItems: [
        "Ampliamento",
        "Ristrutturazione",
        "Nuova costruzione",
        "Concorso",
        "Studio sicurezza",
      ],
    },
  ],
};