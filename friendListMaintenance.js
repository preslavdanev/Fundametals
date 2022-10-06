function friendListMaintenance(names) {

    let currentNames = names.shift(0).split(', ');
    let blackListedNames = 0;
    let lostNames = 0;
    let error = "";

    for (let i = 0; i < names.length; i++) {

        let currentRow = names[i].split(' ');
        let currentCommand = currentRow[0];
        let currentName = currentRow[1];
        let newName = currentRow[2];
        let isBlackListed = false;

        switch (currentCommand) {
            case "Blacklist":
                if (currentNames.includes(currentName)) {
                    console.log(`${currentName} was blacklisted.`);
                    blackListedNames++;
                    isBlackListed = true;
                    currentNames.splice(currentName, 1, "Blacklisted")
                } else {
                    console.log(`${currentName} was not found.`);
                }
                break;
            case "Error":
                if ((currentNames[currentName]) !== "Lost") {
                    if (currentNames.includes(currentNames[currentName]) && (currentNames[currentName]) !== "Blacklisted") {
                        error = currentNames.splice(currentName, 1);
                        console.log(`${error} was lost due to an error.`);
                        lostNames++;
                        currentNames.splice(currentName, 0, "Lost")
                    }
                }
                break;
            case "Change":
                if (Number(currentName) < currentNames.length) {
                    let cuttedName = currentNames.shift(currentNames[currentName]);
                    currentNames.unshift(newName);
                    console.log(`${cuttedName} changed his username to ${newName}.`);
                }
                break;
            case "Report": break;
        }
    }
    console.log(`Blacklisted names: ${blackListedNames}`);
    console.log(`Lost names: ${lostNames}`);
    console.log(currentNames.join(' '));
}
friendListMaintenance(["Mike, John, Eddie, William",
"Change 4 George",
"Report"])






