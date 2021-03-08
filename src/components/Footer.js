import React from "react";

const Footer = () => {
  return (
    <div class="pb-4">
      <h4 class="text-xs">
        Developed by Joey Cadieux &middot;{" "}
        <a class="text-blue-600" href="mailto:joeycadieux161@gmail.com">
          <button className="btn"> Contact Me </button>
        </a>
        &middot;
        <a class="text-blue-600" href="https://forms.gle/Hqve4wC3xmdruhhJA">
          <button className="btn"> Found an issue?</button>
        </a>
      </h4>
    </div>
  );
};

export default Footer;
