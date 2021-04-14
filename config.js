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
  sideBarInfo: ["Nome", "City", "Type", "Costruzione"],
    popupInfo: ["Nome", "City"],
  filters: [
    {
      type: "dropdown",
      title: "Type: ",
      columnHeader: "Type",
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
          title: "Costruzione: ",
          columnHeader: "Costruzione",
          listItems: [
              "CHF  400.000,00",
              "CHF  6.000.000,00",
              "CHF  1.800.000,00",
              "CHF  2.500.000,00",
              "CHF  2.400.000,00",
              "CHF  1.500.000,00",
              "CHF  57.000.000,00",
              "CHF  2.000.000,00",
              "CHF  1.100.000,00",
              "CHF  2.100.000,00",
              "CHF  500.000,00",
              "CHF  700.000,00",
              "CHF  115.000.000,00",
              "CHF  15.000.000,00",
              "CHF  2.000.000,00",
              "CHF  1.500.000,00",
              "CHF  1.250.000,00",
              "CHF  400.000,00",
              "CHF  2.500.000,00",
              "CHF  1.000.000,00",
              "CHF  60.000.000,00",
              "CHF  22.000.000,00",
              "CHF  210.000.000,00",
              "CHF  500.000,00",
              "CHF  70.000.000,00",
              "CHF  2.280.000,00",
              "CHF  -",
              "CHF  3.800.000,00",
              "CHF  13.000.000,00",
              "CHF  1.500.000,00",
              "CHF  3.000.000,00",
              "CHF  3.000.000,00",
              "CHF  3.000.000,00",
              "CHF  30.000.000,00",
              "CHF  -",
              "CHF  -",
              "CHF  -",
              "CHF  11.000.000,00",
              "CHF  2.000.000,00",
              "CHF  -",
              "CHF  31.000.000,00",
          ],
      },
    {
      type: "checkbox",
      title: "Fine: ",
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