const formPersegiPanjang=document.getElementById("form-persegi-panjang")
const inputPersegiPanjang=document.getElementById("input-persegi-panjang")
const hasilPersegiPanjang=document.getElementById("hasil-persegi-panjang")
const inputLebar=document.getElementById("input-lebar")
const formKelilingPersegi=document.getElementById("form-keliling-persegi")
const inputKeliling=document.getElementById("input-keliling")
const hasilKeliling=document.getElementById("hasil-keliling")
const hasil=document.getElementById("hasil")
const formLuasKeliling=document.getElementById("form-luas-keliling")
const inputSisi=document.getElementById("input-sisi")

function hitungpersegipanjang() {
    const value=inputPersegiPanjang.value
    const value2=inputLebar.value
    if(!value && !value2){
        alert("Input tidak boleh kosong")
        return
    }
    const result=value*value2
    hasilPersegiPanjang.innerText=(`
        L=${value} x ${value2}
        L=${value2} 
        P=${value}
        hasil=${result}
        `)
}

function hitungluas() {
    const value=inputSisi.value
    if(!value){
        alert("Input tidak boleh kosong")
        return
    }
    const result=value*value
    hasil.innerText=(`
        L=${value} x ${value}
        L=${value} 
        S=${value}
        hasil=${result}
        `)
}

function hitungkeliling() {
    const value=inputKeliling.value
    if(!value){
        alert("Input tidak boleh kosong")
        return
    }
    const result=value*value
    hasilKeliling.innerText=(`
        L=${value} x ${value}
        L=${value} 
        S=${value}
        hasil=${result}
        `)
}

formLuasKeliling.addEventListener("submit", (e) =>{
    e.preventDefault()
    hitungluas()
})

function reset() {
    hasil.innerText=""
    inputSisi.value=0
}

formKelilingPersegi.addEventListener("submit", (e) =>{
    e.preventDefault()
    hitungkeliling()
})

function resetKeliling() {
    hasilKeliling.innerText=""
    inputKeliling.value=0
}

formPersegiPanjang.addEventListener("submit", (e) =>{
    e.preventDefault()
    hitungpersegipanjang()
})

function resetPersegiPanjang() {
    hasilPersegiPanjang.innerText=""
    inputLebar.value=0
    inputPersegiPanjang.value=0
}

const sectionLuasKeliling=document.querySelector(".luas-keliling")
const sectionPersegiPanjang=document.querySelector(".persegi-panjang")
sectionPersegiPanjang.style.display="none"
function btnPersegi() {
sectionPersegiPanjang.style.display="none"
sectionLuasKeliling.style.display="block"
}

function btnPersegiPanjang() {
sectionPersegiPanjang.style.display="block"
sectionLuasKeliling.style.display="none"
}