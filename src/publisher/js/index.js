console.log("hello")



function a() {
    console.log("running a")
    setTimeout(() => {
        b();
    }, 1000);
}

function b() {
    console.log("running b")
    setTimeout(() => {
        c();
    }, 1000);
}

function c() {
    console.log("running c")
    setTimeout(() => {
        a();
    }, 1000);
}

