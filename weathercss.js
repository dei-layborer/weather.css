window.addEventListener('DOMContentLoaded', init);

async function init() {

    addPrefsIcon(options.prefsIconParent);
    const currentWeather = await getWeather();


}

// adds the preferences icon 
function addPrefsIcon(parentElement) {

    // SVG icon: https://iconmonstr.com/wrench-9-svg/

    if (options.showPrefsIcon) {
        const prefsIcon = document.createElement('div');
        prefsIcon.setAttribute('id', 'weather-prefs-icon');

        // set icon position absolutely, if enabled
        if (appearance.prefsIconAbsolutePosition) {
            const prefsLocation = appearance.prefsIconLocation;
            prefsIcon.style.position = 'absolute';
            if (parseFloat(prefsLocation.top) != 0) {
                prefsIcon.style.top = prefsLocation.top;
            } else if (parseFloat(prefsLocation.bottom) != 0) {
                prefsIcon.style.bottom = prefsLocation.bottom;
            } else {
                prefsIcon.style.top = '0';
            }

            if (parseFloat(prefsLocation.left) != 0) {
                prefsIcon.style.left = prefsLocation.left;
            } else if (parseFloat(prefsLocation.right) != 0) {
                prefsIcon.style.right = prefsLocation.right;
            } else {
                prefsIcon.style.left = '0';
            }

            if (parseFloat(prefsLocation.z)) {
                prefsIcon.style.zIndex = prefsLocation.z;
            }
        }
        // apply default/included styles, if applicable
        if (options.useIncludedStyles) {
            prefsIcon.style.display = 'inline-block';
            prefsIcon.style.backgroundImage = `url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.273 19.469c-.662-.662-1.582-1.002-2.514-.931-1.767.137-3.58-.47-4.931-1.821-1.223-1.224-1.83-2.824-1.83-4.426 0-.604.086-1.208.258-1.792l3.771 3.771c1.912.417 4.652-2.353 4.242-4.242l-3.769-3.771c.583-.171 1.187-.257 1.79-.257 1.603 0 3.202.606 4.428 1.83 1.35 1.351 1.957 3.164 1.82 4.93-.072.933.268 1.853.93 2.514l2.843 2.843c1.066-1.793 1.689-3.88 1.689-6.117 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.236 0 4.323-.623 6.115-1.688l-2.842-2.843z"/></svg>')`;
            prefsIcon.style.backgroundSize = 'cover';
            prefsIcon.style.width = appearance.prefsIconSize;
            prefsIcon.style.height = appearance.prefsIconSize;
            prefsIcon.style.cursor = 'pointer';
        }

        let parent;
        if (typeof parentElement == 'string') {
            parent = document.getElementById(parentElement);
        } else {
            parent = parentElement;
        }
        parent.appendChild(prefsIcon);
        prefsIcon.addEventListener('click', showUserPreferences);
    }
}

function showUserPreferences() {

}

async function getWeather() {

const resp = await fetch("https://wttr.in/?format=j1");  // returns weather data in JSON format
// const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
const respData = await resp.json();
console.log(respData);


const dataShower = document.createElement('div');
dataShower.setAttribute('id', 'data-shower');
dataShower.textContent = JSON.stringify(respData.current_condition[0].FeelsLikeF);
document.body.appendChild(dataShower);
   
}