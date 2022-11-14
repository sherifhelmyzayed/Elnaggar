const modalContent = document.getElementById('modal-content');

const modal1 = `
<div class="modal-body" id="modal-body">
<img class="modal-background" src="../Assets/services/service-1.png" alt="">
<div class="d-flex justify-content-center align-items-center">
    <img class="my-5" src="../Assets/services/service-1-text.png" alt="">
</div>
<ul class="mt-1 ml-5">
    <li>
        <p>Freight sourcing strategies</p>
    </li>
    <li>
        <p>Logistics</p>
    </li>
    <li>
        <p>Analysis of transportation expenses</p>
    </li>
    <li>
        <p>Analysis of carrier performance</p>
    </li>
    <li>
        <p>Effective 3PL management</p>
    </li>
    <li>
        <p>Business planning</p>
    </li>
    <li>
        <p>Project management</p>
    </li>
    <li>
        <p>Management of inbound, outbound, and reverse logistics</p>
    </li>
    <li>
        <p>Coordination of a wide supplier base</p>
    </li>
    <li>
        <p>Network analysis and designs</p>
    </li>
    <li>
        <p>Inventory planning and management</p>
    </li>
</ul>
</div>
`


const modal2 = `
<div class="modal-body" id="modal-body">
<img class="modal-background" src="../Assets/services/service-2.png" alt="">
<div class="d-flex justify-content-center align-items-center">
    <img class="my-5" src="../Assets/services/service-2-text.png" alt="">
</div>
<ul class="mt-1 ml-5">
    <li>
        <p>Freight sourcing strategies</p>
    </li>
    <li>
        <p>Logistics</p>
    </li>
    <li>
        <p>Analysis of transportation expenses</p>
    </li>
    <li>
        <p>Analysis of carrier performance</p>
    </li>
    <li>
        <p>Effective 3PL management</p>
    </li>
    <li>
        <p>Business planning</p>
    </li>
    <li>
        <p>Project management</p>
    </li>
    <li>
        <p>Management of inbound, outbound, and reverse logistics</p>
    </li>
    <li>
        <p>Coordination of a wide supplier base</p>
    </li>
    <li>
        <p>Network analysis and designs</p>
    </li>
    <li>
        <p>Inventory planning and management</p>
    </li>
</ul>
</div>
`

const modal3 = `
<div class="modal-body" id="modal-body">
<img class="modal-background" src="../Assets/services/service-3.png" alt="">
<div class="d-flex justify-content-center align-items-center">
    <img class="my-5" src="../Assets/services/service-3-text.png" alt="">
</div>
<ul class="mt-1 ml-5">
    <li>
        <p>Freight sourcing strategies</p>
    </li>
    <li>
        <p>Logistics</p>
    </li>
    <li>
        <p>Analysis of transportation expenses</p>
    </li>
    <li>
        <p>Analysis of carrier performance</p>
    </li>
    <li>
        <p>Effective 3PL management</p>
    </li>
    <li>
        <p>Business planning</p>
    </li>
    <li>
        <p>Project management</p>
    </li>
    <li>
        <p>Management of inbound, outbound, and reverse logistics</p>
    </li>
    <li>
        <p>Coordination of a wide supplier base</p>
    </li>
    <li>
        <p>Network analysis and designs</p>
    </li>
    <li>
        <p>Inventory planning and management</p>
    </li>
</ul>
</div>
`

const modal4 = `
<div class="modal-body" id="modal-body">
<img class="modal-background" src="../Assets/services/service-4.png" alt="">
<div class="d-flex justify-content-center align-items-center">
    <img class="my-5" src="../Assets/services/service-4-text.png" alt="">
</div>
<ul class="mt-1 ml-5">
    <li>
        <p>Freight sourcing strategies</p>
    </li>
    <li>
        <p>Logistics</p>
    </li>
    <li>
        <p>Analysis of transportation expenses</p>
    </li>
    <li>
        <p>Analysis of carrier performance</p>
    </li>
    <li>
        <p>Effective 3PL management</p>
    </li>
    <li>
        <p>Business planning</p>
    </li>
    <li>
        <p>Project management</p>
    </li>
    <li>
        <p>Management of inbound, outbound, and reverse logistics</p>
    </li>
    <li>
        <p>Coordination of a wide supplier base</p>
    </li>
    <li>
        <p>Network analysis and designs</p>
    </li>
    <li>
        <p>Inventory planning and management</p>
    </li>
</ul>
</div>
`

const modal5 = `
<div class="modal-body" id="modal-body">
<img class="modal-background" src="../Assets/services/service-5.png" alt="">
<div class="d-flex justify-content-center align-items-center">
    <img class="my-5" src="../Assets/services/service-5-text.png" alt="">
</div>
<ul class="mt-1 ml-5">
    <li>
        <p>Freight sourcing strategies</p>
    </li>
    <li>
        <p>Logistics</p>
    </li>
    <li>
        <p>Analysis of transportation expenses</p>
    </li>
    <li>
        <p>Analysis of carrier performance</p>
    </li>
    <li>
        <p>Effective 3PL management</p>
    </li>
    <li>
        <p>Business planning</p>
    </li>
    <li>
        <p>Project management</p>
    </li>
    <li>
        <p>Management of inbound, outbound, and reverse logistics</p>
    </li>
    <li>
        <p>Coordination of a wide supplier base</p>
    </li>
    <li>
        <p>Network analysis and designs</p>
    </li>
    <li>
        <p>Inventory planning and management</p>
    </li>
</ul>
</div>
`

const modal6 = `
<div class="modal-body" id="modal-body">
<img class="modal-background" src="../Assets/services/service-6.png" alt="">
<div class="d-flex justify-content-center align-items-center">
    <img class="my-5" src="../Assets/services/service-6-text.png" alt="">
</div>
<ul class="mt-1 ml-5">
    <li>
        <p>Freight sourcing strategies</p>
    </li>
    <li>
        <p>Logistics</p>
    </li>
    <li>
        <p>Analysis of transportation expenses</p>
    </li>
    <li>
        <p>Analysis of carrier performance</p>
    </li>
    <li>
        <p>Effective 3PL management</p>
    </li>
    <li>
        <p>Business planning</p>
    </li>
    <li>
        <p>Project management</p>
    </li>
    <li>
        <p>Management of inbound, outbound, and reverse logistics</p>
    </li>
    <li>
        <p>Coordination of a wide supplier base</p>
    </li>
    <li>
        <p>Network analysis and designs</p>
    </li>
    <li>
        <p>Inventory planning and management</p>
    </li>
</ul>
</div>
`
const setModal = (id) => {
    console.log(id);
    console.log(modalContent);

    if (id === 1) {
        modalContent.innerHTML = modal1
    }

    if (id === 2) {
        modalContent.innerHTML = modal2
    }

    if (id === 3) {
        modalContent.innerHTML = modal3
    }

    if (id === 4) {
        modalContent.innerHTML = modal4
    }

    if (id === 5) {
        modalContent.innerHTML = modal5
    }

    if (id === 6) {
        modalContent.innerHTML = modal6
    }
}


const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
const valueModal = params.modal;
const valueID = params.id


if (valueModal === 'true') {
    setModal(parseInt(valueID) + 1);
    const modalEl = document.getElementById('exampleModal')
    new bootstrap.Modal(modalEl).show();
}