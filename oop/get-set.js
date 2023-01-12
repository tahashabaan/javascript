const data={
  set location(val){
    val=val.trim();
    this._location=val;
  },
  get location(){
     return this._location;
  }
}
data.location='ben suef';
console.log(data.location);