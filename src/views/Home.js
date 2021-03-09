import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
              &middot; Last updated 3/08/2021 10:05 a.m.
            </h4>

            <br />

            <div class="alert-banner">
              <strong>
                <i class="fas fa-exclamation-triangle pr-1"></i> Attention
              </strong>
              <p class="mt-1">
                For the most up to date information regarding COVID-19 in
                Canada, please consult
                <a
                  class="border-b border-dotted"
                  href="https://www.health.pa.gov/topics/disease/Pages/Coronavirus.aspx"
                >
                  Canada Deptartment of Health
                </a>
                . This site should not be used for life saving information -
                instead, rather, a source for numbers and statistics.
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
