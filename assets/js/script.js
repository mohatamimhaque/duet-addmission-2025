const buildingCoords = {
    "Old Academic Building (OAB)": [24.01799580179727, 90.4178142637178],
    "Shahid Syed Nazrul Islam Academic Building (SSNIAB)": [24.017184360247807, 90.4190504720577],
    "Textile Workshop Building (TWB)": [24.01674997397732, 90.41898429609469],
};

let map, marker;

const buildingImages = {
    "Old Academic Building (OAB)": "img/oab.jpg",
    "Shahid Syed Nazrul Islam Academic Building (SSNIAB)": "img/ssniab.jpeg",
    "Textile Workshop Building (TWB)": "img/twb.jpg"
};


const seatData = {
    "1st_shift": {
        "time": "09:30 AM to 12:00 PM",
        "buildings": {
            "Old Academic Building (OAB)": {
                "departments": ["CE"],
                "seat_ranges": {
                    "301": [10001, 10030],
                    "302": [10031, 10060],
                    "305": [10061, 10124],
                    "311": [10125, 10204],
                    "314": [10205, 10268],
                    "315": [10269, 10332],
                    "318": [10333, 10396],
                    "401": [10397, 10428],
                    "402": [10429, 10458],
                    "405": [10459, 10522],
                    "409(A)": [10523, 10552],
                    "409(B)": [10553, 10582],
                    "412": [10583, 10646],
                    "413": [10647, 10710],
                    "418": [10711, 10774],
                    "430 Lab": [10775, 10834]
                }
            },
            "Shahid Syed Nazrul Islam Academic Building (SSNIAB)": {
                "departments": ["CE", "ME/IPE/MME"],
                "seat_ranges": {
                    "2002": [10835, 10888],
                    "2006": [10889, 10928],
                    "2008": [10929, 10966],
                    "2010": [10967, 11004],
                    "2012": [11005, 11060],
                    "2029": [11061, 11120],
                    "3006": [11121, 11158],
                    "3010": [11159, 11191],
                    "3012": [11192, 11247],
                    "3031": [11248, 11299],
                    "4004": [11300, 11329],
                    "4010": [11330, 11359],
                    "5004": [11360, 11389],
                    "5005": [11390, 11449],
                    "5017": [11450, 11470],
                    "6004 (A)": [13234, 13287],
                    "6005": [13288, 13326],
                    "6006 (B)": [13327, 13365],
                    "6017": [13366, 13437],
                    "7019 (A)": [13438, 13475],
                    "7019 (B)": [13476, 13513],
                    "7026": [13514, 13573],
                    "8009": [13574, 13629],
                    "8010": [13630, 13704],
                    "8020": [13705, 13760],
                    "8026": [13761, 13820],
                    "9011": [13821, 13895],
                    "9017": [13896, 13949],
                    "9018": [13950, 14009],
                    "11002": [14010, 14069],
                    "11008": [14070, 14107],
                    "11009": [14108, 14149],
                    "11010": [14150, 14209],
                    "10th Floor Open Space": [14210, 14249]
                }
            },
            "Textile Workshop Building (TWB)": {
                "departments": ["ME/IPE/MME", "TE", "Arch"],
                "seat_ranges": {
                    "Fabric Lab (Ground Floor)": [14250, 14309],
                    "Yarn Lab (Ground Floor)": {
                        "ME/IPE/MME": [14310, 14339],
                        "TE": [15114, 15183]
                    },
                    "Wet Lab (Ground Floor)": [15184, 15258],
                    "201": [15259, 15312],
                    "218": [15313, 15357],
                    "313": [15358, 15402],
                    "315": {
                        "TE": [15403, 15422],
                        "Arch": [15423, 15437]
                    },
                    "316": [15438, 15472],
                    "317": [15473, 15507],
                    "318": [15508, 15541]
                }
            }
        }
    },
    "2nd_shift": {
        "time": "02:00 PM to 4:30 PM",
        "buildings": {
            "Old Academic Building (OAB)": {
                "departments": ["EEE"],
                "seat_ranges": {
                    "301": [11471, 11500],
                    "302": [11501, 11530],
                    "305": [11531, 11594],
                    "311": [11595, 11674],
                    "314": [11675, 11738],
                    "315": [11739, 11802],
                    "318": [11803, 11866],
                    "401": [11867, 11898],
                    "402": [11899, 11928],
                    "405": [11929, 11992],
                    "409(A)": [11993, 12022],
                    "409(B)": [12023, 12052],
                    "412": [12053, 12116],
                    "413": [12117, 12180],
                    "418": [12181, 12244],
                    "430 Lab": [12245, 12304]
                }
            },
            "Shahid Syed Nazrul Islam Academic Building (SSNIAB)": {
                "departments": ["EEE", "CSE", "ChE"],
                "seat_ranges": {
                    "2002": [12305, 12358],
                    "2006": [12359, 12398],
                    "2008": [12399, 12436],
                    "2010": [12437, 12474],
                    "2012": [12475, 12530],
                    "2029": [12531, 12590],
                    "1st Floor Open Space": [12591, 12630],
                    "3006": [12631, 12668],
                    "3010": [12669, 12701],
                    "3012": [12702, 12757],
                    "3031": [12758, 12809],
                    "2nd Floor Open Space": [12810, 12849],
                    "4004": [12850, 12879],
                    "4010": [12880, 12909],
                    "5004": [12910, 12939],
                    "5005": [12940, 12999],
                    "5017": [13000, 13029],
                    "6004 (A)": [13030, 13083],
                    "6005": [13084, 13122],
                    "6006 (B)": [13123, 13161],
                    "6017": [13162, 13233],
                    "7019 (A)": [14340, 14377],
                    "7019 (B)": [14378, 14415],
                    "7026": [14416, 14475],
                    "6th Floor Open Space": [14476, 14515],
                    "8009": [14516, 14571],
                    "8010": [14572, 14646],
                    "8020": [14647, 14702],
                    "8026": [14703, 14762],
                    "7th Floor Open Space": [14763, 14802],
                    "9005": [14803, 14851],
                    "9011": [14852, 14926],
                    "9016 (A)": [14927, 14959],
                    "9016 (B)": [14960, 14992],
                    "9017": [14993, 15046],
                    "9018": [15047, 15106],
                    "8th Floor Open Space": {
                        "CSE": [15107, 15113],
                        "ChE": [15542, 15574]
                    },
                    "11002": [15575, 15634],
                    "11008": [15635, 15672],
                    "11009": [15673, 15714],
                    "11010": [15715, 15774],
                    "10th Floor Open Space": [15775, 15814]
                }
            },
            "Textile Workshop Building (TWB)": {
                "departments": ["ChE", "FE"],
                "seat_ranges": {
                    "Fabric Lab (Ground Floor)": [15815, 15874],
                    "Yarn Lab (Ground Floor)": [15875, 15974],
                    "Wet Lab (Ground Floor)": [15975, 16049],
                    "201": [16050, 16103],
                    "218": [16104, 16148],
                    "313": [16149, 16193],
                    "315": [16194, 16228],
                    "316": [16229, 16263],
                    "317": [16264, 16298],
                    "318": {
                        "ChE": [16299, 16332],
                        "FE": [16333, 16343]
                    },
                    "411": [16344, 16383],
                    "619": [16384, 16423]
                }
            }
        }
    }
};


function findSeat() {
    const roll = parseInt(document.getElementById('rollInput').value);
    const errorMsg = document.getElementById('errorMsg');
    const resultDiv = document.getElementById('result');
    const dateSpan = document.getElementById('date');
    const shiftSpan = document.getElementById('shift');
    const timeSpan = document.getElementById('time');
    const buildingSpan = document.getElementById('building');
    const roomSpan = document.getElementById('room');
    const mapDiv = document.getElementById('map');

    errorMsg.style.display = 'none';
    resultDiv.style.display = 'none';
    mapDiv.style.display = 'none';

    if (!roll || roll <= 0) {
        errorMsg.textContent = 'Please enter a valid roll number.';
        errorMsg.style.display = 'block';
        return;
    }

    let found = false;
    let foundShift = '';
    let foundTime = '';
    let foundBuilding = '';
    let foundRoom = '';

    for (const shiftKey in seatData) {
        const shift = seatData[shiftKey];
        const buildings = shift.buildings;
        for (const buildingName in buildings) {
            const building = buildings[buildingName];
            const seatRanges = building.seat_ranges;

            for (const room in seatRanges) {
                const range = seatRanges[room];
                if (Array.isArray(range) && range.length === 2) {
                    if (roll >= range[0] && roll <= range[1]) {
                        found = true;
                        foundShift = shiftKey === "1st_shift" ? "1st Shift" : "2nd Shift";
                        foundTime = shift.time;
                        foundBuilding = buildingName;
                        foundRoom = room;
                        break;
                    }
                } else if (typeof range === "object") {
                    for (const dept in range) {
                        const subRange = range[dept];
                        if (roll >= subRange[0] && roll <= subRange[1]) {
                            found = true;
                            foundShift = shiftKey === "1st_shift" ? "1st Shift" : "2nd Shift";
                            foundTime = shift.time;
                            foundBuilding = buildingName;
                            foundRoom = `${room} (${dept})`;
                            break;
                        }
                    }
                    if (found) break;
                }
            }
            if (found) break;
        }
        if (found) break;
    }

    if (!found) {
        errorMsg.textContent = "Roll number not found. Please check again.";
        errorMsg.style.display = "block";
        return;
    }


    dateSpan.textContent = "10-08-2025";
    shiftSpan.textContent = foundShift;
    timeSpan.textContent = foundTime;
    buildingSpan.textContent = foundBuilding;
    roomSpan.textContent = foundRoom;

    resultDiv.style.display = "block";

    mapDiv.style.display = "block";

    if (!map) {
        map = L.map('map').setView(buildingCoords[foundBuilding] || [24.017, 90.418], 18);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 22,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        marker = L.marker(buildingCoords[foundBuilding] || [24.017, 90.418]).addTo(map);
        marker.bindPopup(`<b>${foundBuilding}</b><br>${foundRoom}<br><img src="${buildingImages[foundBuilding]}" alt="${foundBuilding}" style="width:300px">`).openPopup();
    } else {
        map.setView(buildingCoords[foundBuilding] || [24.017, 90.418], 18);
        marker.setLatLng(buildingCoords[foundBuilding] || [24.017, 90.418]);
        marker.setPopupContent(`<b>${foundBuilding}</b><br>${foundRoom}`).openPopup();
    }
}



const rollInput = document.getElementById('rollInput');

rollInput.addEventListener('keydown', function(e) {
    if (e.key === 'Backspace') {
        const inputVal = this.value.trim();
        if (inputVal.length === 1) {
            location.reload(); // reload when Backspace empties the input
        }
    }
    if (e.key === 'Enter') {
        e.preventDefault();
        findSeat();
    }
});

rollInput.addEventListener('input', function() {
    const val = this.value.trim();
    if (val.length === 5) {
        findSeat();
    }
});

window.addEventListener('DOMContentLoaded', function() {
    const rollInput = document.getElementById('rollInput');
    rollInput.focus();

    if (rollInput.value.trim() !== '') {
        findSeat();
    }
});