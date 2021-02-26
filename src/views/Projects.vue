<template>
  <div>
    <div style="display: flex; justify-content: center">
      <div style="max-width: 1200px; width: 100%; position: relative">
        <div
          v-for="(project, index) in projects"
          :key="index"
          style="
            display: flex;
            width: 100%;
            margin-top: 60px;
            justify-content: space-around;
          "
        >
          <transition name="sliderleft" appear>
            <div>
              <div
                style="
                  width: 300px;
                  height: 450px;
                  position: relative;
                  margin-right: 40px;
                "
              >
                <img
                  class="project-image"
                  :src="project.img"
                  :alt="project.name"
                />
                <div class="project-date">
                  <div
                    style="
                      font-size: 50px;
                      font-family: 'Times New Roman', Times, serif;
                      color: #4493ff;
                      font-weight: bold;
                    "
                  >
                    2021
                  </div>
                  <div
                    style="
                      font-size: 22px;
                      color: #000;
                      text-transform: lowercase;
                    "
                  >
                    апрель
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <div style="text-align: start">
            <transition name="topper" appear>
              <div
                style="
                  font-size: 30px;
                  font-weight: bold;
                  padding: 14px 24px 24px 0;
                  z-index: 11;
                  font-family: 'Times New Roman', Times, serif;
                "
              >
                {{ project.name }}
              </div>
            </transition>
            <transition name="sliderleft2" appear>
              <div style="font-size: 18px; line-height: 1.6em; color: gray">
                <span v-html="project.description"></span>
              </div>
            </transition>
            <br />
            <br />
            <transition name="fade" appear>
              <a v-if="project.url" :href="project.url" rel="noopener noreferrer" target="_blank">
                <button class="button-container">
                  <div style="font-weight: bold">More</div>
                </button></a
              >
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          year: 2021,
          month: "Апрель",
          name: "Legacy",
          img:
            "https://cfsjets.com/wp-content/uploads/2018/10/Legacy-650-14.jpg",
          description:
            "<p>Montes eligendi tellus conubia fames! Nobis tempus taciti nihil condimentum ullam. Id, vulputate excepturi, accumsan lorem? Praesentium in? Praesent sapien.</p><p>Sociosqu. Explicabo eius porttitor cupidatat consectetur, lacus vestibulum numquam optio faucibus quasi gravida sociis sollicitudin et, quisque cum, pellentesque scelerisque.</p>",
          url: "https://example.com",
        },
        {
          year: 2021,
          month: "Апрель",
          name: "Legacy",
          img:
            "https://cfsjets.com/wp-content/uploads/2018/10/Legacy-650-14.jpg",
          description:
            "<p>Montes eligendi tellus conubia fames! Nobis tempus taciti nihil condimentum ullam. Id, vulputate excepturi, accumsan lorem? Praesentium in? Praesent sapien.</p><p>Sociosqu. Explicabo eius porttitor cupidatat consectetur, lacus vestibulum numquam optio faucibus quasi gravida sociis sollicitudin et, quisque cum, pellentesque scelerisque.</p>",
          url: "https://example.com",
        },
        {
          year: 2021,
          month: "Апрель",
          name: "Legacy",
          img:
            "https://cfsjets.com/wp-content/uploads/2018/10/Legacy-650-14.jpg",
          description:
            "<p>Montes eligendi tellus conubia fames! Nobis tempus taciti nihil condimentum ullam. Id, vulputate excepturi, accumsan lorem? Praesentium in? Praesent sapien.</p><p>Sociosqu. Explicabo eius porttitor cupidatat consectetur, lacus vestibulum numquam optio faucibus quasi gravida sociis sollicitudin et, quisque cum, pellentesque scelerisque.</p>",
          url: "",
        },
        {
          year: 2021,
          month: "Апрель",
          name: "Legacy",
          img:
            "https://cfsjets.com/wp-content/uploads/2018/10/Legacy-650-14.jpg",
          description:
            "<p>Montes eligendi tellus conubia fames! Nobis tempus taciti nihil condimentum ullam. Id, vulputate excepturi, accumsan lorem? Praesentium in? Praesent sapien.</p><p>Sociosqu. Explicabo eius porttitor cupidatat consectetur, lacus vestibulum numquam optio faucibus quasi gravida sociis sollicitudin et, quisque cum, pellentesque scelerisque.</p>",
          url: "https://example.com",
        },
        {
          year: 2021,
          month: "Апрель",
          name: "Legacy",
          img:
            "https://cfsjets.com/wp-content/uploads/2018/10/Legacy-650-14.jpg",
          description:
            "<p>Montes eligendi tellus conubia fames! Nobis tempus taciti nihil condimentum ullam. Id, vulputate excepturi, accumsan lorem? Praesentium in? Praesent sapien.</p><p>Sociosqu. Explicabo eius porttitor cupidatat consectetur, lacus vestibulum numquam optio faucibus quasi gravida sociis sollicitudin et, quisque cum, pellentesque scelerisque.</p>",
          url: "https://example.com",
        },
      ],
    };
  },
};
</script>

<style scoped>
.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  background-color: lightgray;
}

.project-date {
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  text-align: start;
  padding-bottom: 16px;
  padding-right: 40px;
}

.button-container {
  height: 50px;
  border-radius: 4px;
  padding: 0 20px;
  border: 1px solid #4493ff;
  transition: all 0.4s;
  color: #4493ff;
}

.button-container:hover {
  background-color: #4493ff;
  color: white;
}
</style>