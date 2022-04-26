export const changeTheme = (event) => {
  const value = event.target.value;
  switch (value) {
    case "light":
        document.documentElement.style.setProperty('--card-background', 'aliceblue');
        document.documentElement.style.setProperty('--main-color', '#0084ff');
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--hover-color', '#004a8f');
        
        document.documentElement.style.setProperty('--global-font', "'El Messiri', sans-serif");
      break;
    case "dark":
        document.documentElement.style.setProperty('--card-background', '#a6a6a6');
        document.documentElement.style.setProperty('--main-color', '#4d4d4d');
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--hover-color', '#3d3d3d');
        document.documentElement.style.setProperty('--global-font', 'sans-serif');
      break;
  }
};
