let resturant = {
  name: "AUS",
  guestCapactiy: 75,
  guestCount: 0,
  checkAvl: function (partySize) {
    let seatLeft = this.guestCapactiy - this.guestCount;
    return seatLeft >= partySize;
  },
  removeParty: function (partySize) {
    this.guestCapactiy = this.guestCapactiy - partySize;
    return this.guestCapactiy;
  },
  seatParty: function (partySize) {
    this.guestCapactiy = this.guestCapactiy + partySize;
    return this.guestCapactiy;
  },
};

let status = resturant.checkAvl(72);
console.log(status);
console.log(resturant.removeParty(72));
