const searchWrapper = document.querySelector(".search-input");
const inputBox = document.querySelector("input");
const suggBox = document.querySelector(".auto-box");

inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        emptyArray = suggestions.filter((data) => {
            return data.toLowerCase().startsWith(userData.toLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return '<li>' + data + '</li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) { // Fix: Changed "index" to "i"
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active");
    }
}

function select(element) {
    let selectUserData = element.textContent;
    inputBox.value = selectUserData;
    searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}



document.addEventListener("DOMContentLoaded", function () {
    const searchWrapper = document.querySelector(".search-input");
    const inputBox = document.querySelector("input");
    const suggBox = document.querySelector(".auto-box");

    const companies = [
        "Adobe",
        "Amazon",
        "Cisco",
        "Citi",
        "Deloitte",
        "Facebook",
        "Flipkart",
        "Intuit",
        "Google",
        "Microsoft",
        "Uber",
        "Wells Fargo"
    ];

    const searchIcon = document.querySelector(".icon");

    searchIcon.addEventListener("click", () => {
        const searchValue = inputBox.value.trim();
        if (searchValue !== "") {
            const matchedCompany = companies.find((company) =>
                company.toLowerCase() === searchValue.toLowerCase()
            );

            if (matchedCompany) {
                const formattedCompanyName = matchedCompany.toLowerCase().replace(/\s+/g, "-");
                scrollToCompany(formattedCompanyName);
            } else {
                // Handle case when no match is found
                alert("Company not found. Please enter a valid company name.");
            }
        }
    });

    function scrollToCompany(companyId) {
        const companyDiv = document.getElementById(companyId);
        if (companyDiv) {
            const scrollOffset = -400; // Adjust this value as needed
            window.scrollTo({
                top: companyDiv.offsetTop - scrollOffset,
                behavior: "smooth"
            });
        }
    }

    // function scrollToCompany(companyId) {
    //     const companyDiv = document.getElementById(companyId);
    //     if (companyDiv) {
    //         window.scrollTo({
    //             top: companyDiv.offsetTop,
    //             behavior: "smooth"
    //         });
    //     }
    // }

    inputBox.onkeyup = (e) => {
        let userData = e.target.value;
        let emptyArray = [];
        if (userData) {
            emptyArray = companies.filter((data) => {
                return data.toLowerCase().startsWith(userData.toLowerCase());
            });
            emptyArray = emptyArray.map((data) => {
                return '<li>' + data + '</li>';
            });
            searchWrapper.classList.add("active");
            showSuggestions(emptyArray);
            let allList = suggBox.querySelectorAll("li");
            for (let i = 0; i < allList.length; i++) {
                allList[i].setAttribute("onclick", "select(this)");
            }
        } else {
            searchWrapper.classList.remove("active");
        }
    };

    function select(element) {
        let selectUserData = element.textContent;
        inputBox.value = selectUserData;
        searchWrapper.classList.remove("active");
    }

    function showSuggestions(list) {
        let listData;
        if (!list.length) {
            userValue = inputBox.value;
            listData = '<li>' + userValue + '</li>';
        } else {
            listData = list.join('');
        }
        suggBox.innerHTML = listData;
    }
});
