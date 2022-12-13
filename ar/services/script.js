const modalContent = document.getElementById('modal-content');

const modal1 = `
<div class="modal-body" id="modal-body">
<i class="closeBtn far fa-times-circle" data-bs-dismiss="modal"></i>
<img class="modal-background" src="../Assets/services/l-service-1.png" alt="">
<div class="d-flex justify-content-center align-items-center">
    <div class="d-flex justify-content-center align-items-center modal-services">
        <img class="svg" src="../Assets/home/mini-grid-svg-1.png" alt="">
        <h2>لوجيستيات طرف رابع		</h2>
    </div>
</div>
<div class="modal-ul">
    <ul class="mt-1 ml-5 ">
        <li>
        استراتيجيات مصادر الشحن
        </li>
        <li>
        اللوجستيات
        </li>
        <li>
        تحليل مصاريف النقل 
        </li>
        <li>
        تحليل أداء الناقل 
        </li>
        <li>
        إدارة PL3 فعالة
        </li>
        <li>
        تخطيط الأعمال 
        </li>
        <li>
        إدارة المشروع 
        </li>
        <li>
        إدارة الخدمات اللوجستية الواردة و الصادرة و العكسية
        </li>
        <li>
        تنسيق قاعدة واسعة من الموردين 
        </li>
        <li>
        تحليل و تصميم الشبكة
        </li>
        <li>
        تخطيط و ادارة المخزون
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
        <h2>التجارة الدولية</h2>
    </div>
</div>
<div class="modal-text">
    <p>نقدم مجموعة كاملة من الخدمات فيما يتعلق بجميع أنواع المعاملات التجارية الدولية سواء استيراد أو تصدير
    أو عبور دول محايدة.
    </p>
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
        <h2>إدارة سلسلة الإمدادات</h2>
    </div>
</div>
<div class="modal-text">
    <p>
    لدينا وعي كامل بجميع احتياجات إدارة سلسلة التوريد الخارجية من التخطيط والمشتريات والخدمات
    اللوجستية والتخزين
    .
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
        <h2>الحلول اللوجستية</h2>
    </div>
</div>
<div class="modal-ul">
    <ul class="mt-1 ml-5 ">
        <li>
        الشحن :
        </li>
        <p>
        نقدم خدمات الاستعانة بمصادر خارجية ومن الغير على أساس شركاء الشحن الموثوق بهم.
        </p>
        <li>
        النقل:
        </li>
        <p>
        نحن نهدف إلى توفير حلول النقل المحلي وغير المحلي باستخدام أسطولنا الداخلي والخارجي
        </p>
        <li>
        التخليص الجمركي:
        </li>
        <p>
        يتيح لنا مقدمو خدمات التخليص الجمركي لدينا تغطية كاملة لجميع الموانئ البحرية والمطارات المصرية , بالإضافة إلى شبكة من الوكلاء في جميع أنحاء العالم لتقديم خدمات التخليص الجمركي في
        الدول الأجنبية بشروط تسليم مختلفة
        
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
        <h2>التخزين</h2>
    </div>
</div>
<div class="modal-text">
    <p>
    يمكن مستودعاتنا المجهزة بالكامل على مساحة ١٨٠٠ متر مربع في المنطقة الخارجية للإسكندرية أن تقدم جميع أنشطة التخزين والتفريغ والتحميل والتعبئة والتجميع لجميع أنواع البضائع والسلع
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