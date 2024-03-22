
const address={
    // house:"10A",
    street: 12,
    society:"l"
}

const addressRaw=findAddress(address);
console.log(addressRaw);

function findAddress(obj) {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";
    return street + "," + house + "," + society;
    }