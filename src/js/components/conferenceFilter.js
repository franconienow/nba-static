const conferenceRender = (filterdList, teamsWrapper) => {
  teamsWrapper.innerHTML = "";
  for (const team of filterdList) {
    teamsWrapper.appendChild(team);
  }
};

const toggleConfernce = (conference, teamsWrapper) => {
  const teamsList = [...teamsWrapper.children];
  const filterdList = teamsList.filter(
    (team) => team.dataset.conf === conference
  );
  if (filterdList.length) {
    conferenceRender(filterdList, teamsWrapper);
  }
};

const conferenceFilter = (confFilter) => {
  const toggler = confFilter.querySelector(".conf-toggler");
  const teamsWrapper = confFilter.querySelector(".conf-content");
  const allTeamsList = [...teamsWrapper.children];

  for (const button of toggler.children) {
    button.addEventListener("click", () => {
      conferenceRender(allTeamsList, teamsWrapper);
      toggleConfernce(button.dataset.confToggle, teamsWrapper);
    });
  }
};

export { conferenceFilter };
