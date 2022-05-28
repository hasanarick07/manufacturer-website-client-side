import React from "react";

const MyPortfolio = () => {
  return (
    <div className="text-left p-7">
      <h1 className="text-4xl my-5">Md. Arick Hasan Rana</h1>
      <p className="text-xl my-5">Email : hasanarick000@gmail.com</p>
      <h1 className="text-4xl my-5">Educational Background :</h1>
      <div class="overflow-x-auto ">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Exam Title </th>
              <th>Concentration/Major</th>
              <th>Institute</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bachelor of Science (BSc)</td>
              <td>Electronics and Telecommunication Engineering</td>
              <td>Daffodil International University</td>
            </tr>
            <tr class="hover">
              <td>HSC</td>
              <td>Science </td>
              <td>Jahangirnagar University School & College</td>
            </tr>
            <tr>
              <td> SSC</td>
              <td>Science </td>
              <td>Maleka Banu Adarsha Bidyaniketan</td>
            </tr>
          </tbody>
        </table>
        <h1 className="text-4xl my-5">Technology known as a developer</h1>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>BootStrap</li>
          <li>Chrome DevTools</li>
          <li>GitHub</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
          <li>React </li>
          <li>Firebase </li>
          <li>Netlify </li>
          <li>Heroku </li>
          <li>React Router </li>
          <li>MongoDB </li>
        </ul>
      </div>
      <h1 className="text-4xl my-5">Live Website Link</h1>
      <ul>
        <li>https://attar-fb8a1.web.app/</li>
        <li>https://inventory-management-ffbc0.web.app/</li>
        <li>https://physics-teacher-e7cf0.web.app/</li>
      </ul>
    </div>
  );
};

export default MyPortfolio;
