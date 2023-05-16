const url = "https://free-football-soccer-videos.p.rapidapi.com/";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "8b06f46207msha4a5caf7f953de7p10c17ajsnac74283a5319",
          "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
        },
      };

      async function fetchHighlights() {
        try {
          const response = await fetch(url, options);
          const result = await response.text();
          document.getElementById("tablee").innerHTML = result;
        } catch (error) {
          console.error(error);
        }
      }

      fetchHighlights();
