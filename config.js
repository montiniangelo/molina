const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoibWFwbW9saW5hY2giLCJhIjoiY2tuaDVyNjBxM2J1cDJycDlmMjJpczN3dyJ9.hoSf2ecIgPRw1R0ih3txRQ",
  CSV: "./data.csv",
  center: [8.97483, 45.99229],
  zoom: 5,
  title: "Molina Portfolio",
  description:
    "Description",
  sideBarInfo: ["Location_Name", "City", "Type", "Costruzione"],
  popupInfo: ["Location_Name", "City", "url"],
  filters: [
    {
      type: "dropdown",
      title: "Type: ",
      columnHeader: "Tipologia",
      listItems: [
        "Ristrutturazione",
        "Ampliamento",
        "Nuova costruzione",
        "Concorso",
        "Proposta riqualif.",
        "Studio sicurezza",
      ],
    },
      
    {
      type: "dropdown",
      title: "Fine",
      columnHeader: "Fine Lavori",
      listItems: [
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2018",
      ],
    },
  ],
};