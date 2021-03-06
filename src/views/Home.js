import React from "react";

function Home() {
  return (
    <div>
      <header>
        <div class="w-full bg-gray-800 md:pt-20 md:pb-20 text-white">
          <div class="lg:max-w-5xl mx-auto md:px-4 p-4">
            <h1 class="text-4xl font-bold">Canada COVID-19 Tracker</h1>
            <h4 class="text-xs">
              Source:
              <a
                class="border-b border-dotted text-blue-600 border-blue-600 hover:text-blue-800 hover:border-blue-800"
                target="_blank"
                href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html"
              >
                Canada Deptartment of Health
              </a>
              &middot; Last updated 3/06/2021 12:30 p.m.
            </h4>

            <br />

            <div class="mt-10 p-4 bg-red-600 rounded-lg shadow-md text-white text-left">
              <v-alert
                border="bottom"
                colored-border
                type="warning"
                elevation="2"
              >
                Attention New health instructions and curfew in force throughout
                Québec. Avoid travel and consult the measures that apply in your
                region to learn the details. You can also consult all the
                information on COVID‑19.
              </v-alert>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
