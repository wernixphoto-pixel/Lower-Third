async function updateData() {

    try {

        const response = await fetch("data.json?t=" + Date.now());

        const data = await response.json();

        document.getElementById("nama").textContent = data.nama;
        document.getElementById("jabatan").textContent = data.jabatan;

    } catch (e) {

        console.log(e);

    }

}

updateData();

setInterval(updateData,1000);