import { template } from "./template.js";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return {
      data: data,
      ok: response.ok,
    };
  } catch (err) {
    console.error(err);
    return {
      data: null,
      ok: false,
    };
  }
}

(async () => {
  const url = "./Js/constants.json";
  const result = await getData(url);
  if (result.ok) {
    console.log(result.data);
    intial_render(result.data)
  } else {
    console.log("Error");
  }
  await sleep(2000);
  console.log("End of the script");
})();

const intial_render = (data) => {
  const title = document.querySelector("#title");
  title.innerHTML = data.title;

  const task_title = document.querySelector("#task-title");
  const task_description = document.querySelector("#task-description");

  const cards = document.querySelector(".cards");
  const links = document.querySelector("#links");

  data.tasks.forEach(task => {
      task_title.innerHTML = task.task_title;
      task_description.innerHTML = task.task_description;
      task.assets.forEach(asset => {
          const card = tasks_to_render(asset);
          links.innerHTML += `<li><a href="#${asset.asset_id}">${asset.asset_title}</a></li>`;
          if(card) cards.innerHTML += card;
      })
  });
}


const tasks_to_render = (asset) => {
  if (
    asset.asset_type === "display_asset" &&
    asset.asset_content_type === "video"
  ) {
    return `
      <article class="card" id="${asset.asset_id}">
          <div class="card-head">
              <p>${asset.asset_title}</p>
              <div class="info-icon">i</div>
          </div>
          <p>
              <span> Description:</span> ${asset.asset_description}
          </p>
          <hr>
          <iframe width="480" height="300" src="${asset.asset_content}">
          </iframe>
      </article>
    `;
  } else if (
    asset.asset_type === "input_asset" &&
    asset.asset_content_type === "threadbuilder"
  ) {
    return `
    <article class="card" id="${asset.asset_id}">
        <div class="card-head">
            <p>${asset.asset_title}</p>
            <div class="info-icon">i</div>
        </div>
        <p>
            <span> Description:</span> ${asset.asset_description}
        </p>
        <hr>
        ${template.thread}
    </article>
    `;
  } else if (
    asset.asset_type === "input_asset" &&
    asset.asset_content_type === "article"
  ) {
    return `
    <article class="card" id="${asset.asset_id}">
        <div class="card-head">
            <p>${asset.asset_title}</p>
            <div class="info-icon">i</div>
        </div>
        <p>
            <span> Description :</span> ${asset.asset_description}
        </p>
        <hr>
        ${template.structure}
    </article>
    `;
  } else if (
    asset.asset_type === "display_asset" &&
    asset.asset_content_type === "article"
  ) {
    return `
    <article class="card" id="${asset.asset_id}">
        <div class="card-head">
            <p>${asset.asset_title}</p>
            <div class="info-icon">i</div>
        </div>
        <p>
            <span> Description:</span> ${asset.asset_description}
        </p>
        <hr>
        ${template._4sa}
    </article>
    `;
  } else {
    return null;
  }
};
