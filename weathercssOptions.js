/*******************************
 * 
 * OPTIONS
 *    Hopefully these are self-explanatory
 *    But if not, see README.md for descriptions of all of them
 */

const options = {
    useUserLocation: true,
    serverLocation: '',         // must be set to something if useUserLocation is false
    useIncludedStyles: true,    // if false, will not apply any styling to any of the created elements
    // preferences icon
    showPrefsIcon: true,
    prefsIconPosition: {x: -1, y: -1},
    prefsIconParent: document.body,


}

// APPEARANCE FOR THE VARIOUS ELEMENTS
const appearance = {
    // preferences icon
    prefsIconSize: "24px",
    prefsIconAbsolutePosition: true,
    prefsIconLocation: {  // only set one vertical and one horizontal, i.e. only top or bottom, not both (same for left and right)
        top: "10vh",
        bottom: 0,
        left: 0,
        right: 0,
        z: 3
    }
}