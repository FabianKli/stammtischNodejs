'use strict';

/*
let APPOINTMENTS = new Map();
APPOINTMENTS.set(
  '0001',
  {
    id: '0001',
    startDate: new Date('2018-03-16T20:00:00')
  }
);
APPOINTMENTS.set(
  '0002',
  {
    id: '0002',
    startDate: new Date('2018-03-02T20:00:00')
  }
);
*/

var oData = {
			people: [{
				name: "John Miller",
				role: "team member",
				appointments: [
					{
						start: new Date("2018", "2", "2", "20", "00"),
						end: new Date("2018", "2", "2", "23", "59"),
						title: "Regelmäßiger Stammtischtermin",
						info: "Altstadttresen",
						type: "Type01",
						tentative: false
					},
					{
						start: new Date("2018", "2", "16", "20", "00"),
						end: new Date("2018", "2", "16", "23", "59"),
						title: "Regelmäßiger Stammtischtermin",
						info: "Caipi Bar",
						type: "Type02",
						title: false
					},
					{
						start: new Date("2018", "1", "03", "20", "00"),
						end: new Date("2018", "1", "04", "05", "00"),
						title: "Geburtstagsparty Tim",
						info: "Zuhause",
						type: "Type03",
						tentative: true
					}
				]
			}]
			};

function appointments(request, response) {
  response.json(oData);
}

module.exports = {
  appointments: appointments,
};