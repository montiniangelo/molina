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
  sideBarInfo: ["Location_Name", "City", "Costruzione"],
  popupInfo: ["Location_Name"],
  filters: [
    {
      type: "dropdown",
      title: "Type:",
      columnHeader: "Tipologia",
      listItems: [
        "Ampliamento",
        "Ristrutturazione",
        "Nuova costruzione",
        "Concorso",
        "Studio sicurezza",
      ],
    },
    {
      type: "checkbox",
      title: "Promozione: ",
      columnHeader: "Promotion", // Case sensitive - must match spreadsheet entry
      listItems: ["Si", "No"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
  ],
};