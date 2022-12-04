const modalContent = document.getElementById('modal-content');

const modal1 = `
<div class="modal-body" id="modal-body">
<i class="closeBtn far fa-times-circle" data-bs-dismiss="modal"></i>
<img class="modal-background" src="../Assets/services/l-service-1.png" alt="">
<div class="d-flex justify-content-center align-items-center">
    <div class="d-flex justify-content-center align-items-center modal-services">
        <img class="svg" src="../Assets/home/mini-grid-svg-1.png" alt="">
        <h2>Fourth Party Logistics</h2>
    </div>
</div>
<div class="modal-ul">
    <ul class="mt-1 ml-5 ">
        <li>
            Freight sourcing strategies
        </li>
        <li>
            Logistics
        </li>
        <li>
            Analysis of transportation expenses
        </li>
        <li>
            Analysis of carrier performance
        </li>
        <li>
            Effective 3PL management
        </li>
        <li>
            Business planning
        </li>
        <li>
            Project management
        </li>
        <li>
            Management of inbound, outbound, and reverse logistics
        </li>
        <li>
            Coordination of a wide supplier base
        </li>
        <li>
            Network analysis and designs
        </li>
        <li>
            Inventory planning and management
        </li>
    </ul>
</div>

</div>
`

const modal2 = `
<div class="modal-body" id="modal-body">
<i class="closeBtn far fa-times-circle" data-bs-dismiss="modal"></i>
<img class="modal-background" src="../Assets/services/l-service-2.png" alt="">
<div class="d-flex justify-content-center align-items-center">
    <div class="d-flex justify-content-center align-items-center modal-services">
        <img class="svg" src="../Assets/home/mini-grid-svg-2.png" alt="">
        <h2>International Trade</h2>
    </div>
</div>
<div class="modal-text">
    <p>We offer a full package of services concerning all the types international trade
        transactions, whether import, export, or crossing neutral countries.</p>
</div>
</div>
`

const modal3 = `
<div class="modal-body" id="modal-body">
<i class="closeBtn far fa-times-circle" data-bs-dismiss="modal"></i>
<img class="modal-background" src="../Assets/services/l-service-3.png" alt="">
<div class="d-flex justify-content-center align-items-center">
    <div class="d-flex justify-content-center align-items-center modal-services">
        <img class="svg" src="../Assets/home/mini-grid-svg-3.png" alt="">
        <h2>Supply Chain Management</h2>
    </div>
</div>
<div class="modal-text">
    <p>
        We have full awareness with all the needs of an outsourced supply chain management from
        Planning, Procurement, Purchasing, Logistics and Warehousing.
    </p>
</div>
</div>
`


const modal4 = `
<div class="modal-body" id="modal-body">
<i class="closeBtn far fa-times-circle" data-bs-dismiss="modal"></i>
<img class="modal-background" src="../Assets/services/l-service-4.png" alt="">
<div class="d-flex justify-content-center align-items-center">
    <div class="d-flex justify-content-center align-items-center modal-services">
        <img class="svg" src="../Assets/home/mini-grid-svg-4.png" alt="">
        <h2>Logistics Solutions</h2>
    </div>
</div>
<div class="modal-ul">
    <ul class="mt-1 ml-5 ">
        <li>
            Shipping and Freighting:
        </li>
        <p>
            We provide outsourced and offshore services based on trusted freight forwarding
            partners.
        </p>
        <li>
            Haulage/Transportation:
        </li>
        <p>
            We aim for domestic and non-domestic haulage solutions using our in-house and outsourced
            fleet.
        </p>
        <li>
            Customs Clearance:
        </li>
        <p>
            Our Customs Clearance service providers allow us to have a full coverage of all the
            Egyptian Seaports and Airports, in addition to a network agents worldwide to provide
            Clearance Services in foreign countries under different delivery terms.
        </p>
    </ul>
</div>
</div>
`

const modal5 = `
<div class="modal-body" id="modal-body">
<i class="closeBtn far fa-times-circle" data-bs-dismiss="modal"></i>
<img class="modal-background" src="../Assets/services/l-service-5.png" alt="">
<div class="d-flex justify-content-center align-items-center">
    <div class="d-flex justify-content-center align-items-center modal-services">
        <img class="svg" src="../Assets/home/mini-grid-svg-5.png" alt="">
        <h2>Warehousing</h2>
    </div>
</div>
<div class="modal-text">
    <p>
        Our fully equipped warehouse within an extent of 1800 square meters at the outer area of
        Alexandria can offer all activities of warehousing, offloading, loading, packing and
        consolidation for all types of cargos and commodities.
    </p>
</div>
</div>
`

const modal6 = `
<div class="modal-body" id="modal-body">
<i class="closeBtn far fa-times-circle" data-bs-dismiss="modal"></i>
<img class="modal-background" src="../Assets/services/l-service-6.png" alt="">
<div class="d-flex justify-content-center align-items-center">
    <div class="d-flex justify-content-center align-items-center modal-services">
        <img class="svg" src="../Assets/home/mini-grid-svg-6.png" alt="">
        <h2>Consultancy Services</h2>
    </div>
</div>
<div class="modal-text">
    <p>
        Our dedicated team consists of experts who came from various areas of expertise, in the
        fields of Operations Management, Financial Management and Business Development Management.
        Thus, allows us to provide a thorough overview on the whole cycle of International Trade and
        that allows us to act as an outsider consultant.
    </p>
</div>
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