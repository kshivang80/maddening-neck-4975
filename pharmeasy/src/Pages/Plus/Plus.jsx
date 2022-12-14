import FAQ from "./FAQ";
import Styles from "./plus.module.css";
import { AiOutlineRight } from "react-icons/ai";

import { TbDiscount2 } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Plus = () => {
  return (
    <div id={Styles.AllPlus}>
      <div className={Styles.plus}>
        <div className={Styles.plus1}></div>
        <div className={Styles.plus2}>
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/dae8e4be.png"
            alt=""
            className={Styles.img1}
          />
          <img
            src="https://assets.pharmeasy.in/web-assets/dist/3c950b3a.png"
            alt=""
            className={Styles.img2}
          />
        </div>
      </div>
      <div className={Styles.main}>
        <div className={Styles.main1}></div>
        <div className={Styles.main2}>
          <div className={Styles.inmain}>
            <div className={Styles.inmain1}>
              Reduce your medical expenses with Plus
            </div>
            <div className={Styles.inmain2}>
              <div className={Styles.part_main}>
                Enjoy benefits worth{" "}
                <strong className={Styles.strong}>₹1400</strong>
              </div>
            </div>
            <div className={Styles.inmain3}>
              <h1>Get exclusive access to</h1>
              <div>
                <div>
                  <img
                    src="https://club-cdn.pharmeasy.in/production/ui/med_cb.svg"
                    alt=""
                  />
                  <div>
                    <p>5% Extra Cashback</p>
                    <p>Applicable on allopathic medicines only</p>
                  </div>
                </div>
                <div>
                  <img
                    src="https://d22gqcf6g8w6wb.cloudfront.net/ui/diag_cb.svg"
                    alt=""
                  />
                  <div>
                    <p>50% Extra Cashback</p>
                    <p>Applicable on diagnostic tests, using code PLUS40</p>
                  </div>
                </div>
                <div>
                  <img
                    src="https://d22gqcf6g8w6wb.cloudfront.net/ui/delivery.svg"
                    alt=""
                  />
                  <div>
                    <p>FREE Delivery</p>
                    <p>
                      Enjoy free delivery on medicine and healthcare orders
                      above ₹499
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <h3>Additional Benefits</h3>
              <div>
                <div>
                  <img
                    src="https://club-cdn.pharmeasy.in/production/ui/doc_consult.svg"
                    alt=""
                  />
                  <p>Free Doctor Teleconsultation</p>
                </div>
                <div>
                  <img
                    src="https://club-cdn.pharmeasy.in/production/ui/cash_handling.svg"
                    alt=""
                  />
                  <p>Zero Convenience Fees</p>
                </div>
                <div></div>
              </div>
            </div>
            <br />
            <div className={Styles.inmain4}>
              <h2>Plan for you</h2>
              <br />
              <div className={Styles.inmain4_1}>
                <div>
                  <BsFillCheckCircleFill className={Styles.icon1} size={20} />
                  <div>
                    <p>BEST DEAL</p>
                    <p>2 Months</p>
                  </div>
                </div>
                <div>
                  <p>₹399</p>
                  <p>₹149</p>
                </div>
              </div>
              <br />
              <h3>Got a coupon code?</h3>
              <div className={Styles.inmain4_2}>
                <div>
                  <TbDiscount2 className={Styles.iconDiss} size={25} />
                  <p>Apply Coupon</p>
                </div>
                <AiOutlineRight />
              </div>
              <br />
              <hr />
              <hr />
              <br />
              <button>Add to Cart</button>
            </div>
            <br />
            <br />
            <div className={Styles.inmain5}>
              <h1>Calculate your savings for yourself</h1>
              <div>
                <div>
                  <p>If Your spending on medicine is</p>
                  <input type="range" />
                  <h1>As a Plus member, you will save upto</h1>
                  <br />
                  <div>₹1200</div>
                </div>
                <div>
                  <p>Break down</p>
                  <div>
                    <p>5% Cashback on Medicines</p>
                    <p>₹300</p>
                  </div>
                  <div>
                    <p>50% Cashback on Lab Tests*</p>
                    <p>₹500</p>
                  </div>
                  <div>
                    <p>Savings on Shipping & Convenience Charges</p>
                    <p>₹200</p>
                  </div>
                  <div>
                    <p>Savings on Doctor Consultation**</p>
                    <p>₹200</p>
                  </div>
                  <div>
                    <p>Total 2 Months Savings</p>
                    <p>₹1200</p>
                  </div>
                  <p>*Assuming you get a lab test done every 2 months</p>
                  <p>**Assuming you consult a doctor every 2 months</p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className={Styles.heading}>
              <p>Still not sure?</p>
              <p>Hear from some of our PLUS members</p>
            </div>
            <div className={Styles.plusMembers}>
              <div>
                <p>Rahul Singh</p>
                <h2>Saved ₹3782 in 6 months</h2>
                <div>
                  I must admit that I've made huge savings since I became a
                  member of Pharmeasy Plus. There's not just free deliveries but
                  extra cashback on every order too! It makes ordering monthly
                  medicines a truly satisfying experience.”
                </div>
              </div>
              <div>
                <p>Preeti Sharma</p>
                <h2>Saved ₹2142 in 3 months</h2>
                <div>
                  I feel like a premium customer as a PharmEasy plus member. All
                  the extra discounts, free deliveries, it can't get any better
                  than this! Also, since lockdown, I didn't have to step out for
                  my medical and healthcare needs anymore.”
                </div>
              </div>
              <div>
                <p>Ashok Bhagia</p>
                <h2>Saved ₹1527 in 3 months</h2>
                <div>
                  With the ongoing pandemic, online doctor consultation is the
                  need of the hour. I've enjoyed the benefit of FREE doctor
                  consultations with my Plus membership. I've made extra savings
                  on all my medicine orders & lab test bookings too.”
                </div>
              </div>
              <div>
                  <p>Rahul Singh</p>
                  <h2>Saved ₹3782 in 6 months</h2>
                  <div>I must admit that I've made huge savings since I became a member of Pharmeasy Plus. There's not just free deliveries but extra cashback on every order too! It makes ordering monthly medicines a truly satisfying experience.”</div>
                </div>
                <div>
                  <p>Preeti Sharma</p>
                  <h2>Saved ₹2142 in 3 months</h2>
                  <div>I feel like a premium customer as a PharmEasy plus member. All the extra discounts, free deliveries, it can't get any better than this! Also, since lockdown, I didn't have to step out for my medical and healthcare needs anymore.”</div>
                </div>         
            </div>
          </div>
        </div>
      <FAQ arr={PlusFAQ}/>
      </div>
    </div>
  );
};

export default Plus;

const PlusFAQ = [
  {
    ques: "What are the benefits of PharmEasy Plus?",
    type: 1,
    ans1: "Plus members get extra 5% cashback on allopathic medicine orders with free delivery above ₹499 and extra 50% cashback on diagnostics orders along with free doctor teleconsultations.",
  },
  {
    ques: "Does Plus extra cashback apply on Healthcare products as well?",
    type: 1,
    ans1: "No, 5% extra cashback for Plus members is applicable only on allopathic medicines and not on other healthcare products.",
  },
  {
    ques: "How long is my PharmEasy Plus membership valid for?",
    type: 1,
    ans1: "Your PharmEasy Plus membership is valid for 2 months from the date of purchase of the program.",
  },
  {
    ques: "When will|get the cashback?",
    type: 1,
    ans1: "Cashback will be credited into your PharmEasy wallet within 48 hours of order delivery.",
  },
  {
    ques: "What is the validity of the cashback?",
    type: 1,
    ans1: "Cashback earned through the PharmEasy Plus Membership will expire in 60 days.",
  },
  {
    ques: "Is there a cap on the maximum cashback amount that can be used on Medicine orders?",
    type: 1,
    ans1: "Yes, wallet cashback usage is capped at a maximum of 5% of the order value for Medicine orders.",
  },
  {
    ques: "Is there a cap on the maximum cashback amount that can be used on Diagnostics Tests?",
    type: 1,
    ans1: "No, you can use the complete wallet cashback balance on your Diagnostic Test.",
  },
  {
    ques: "Is there a cap on the maximum amount that can be earned through the 5% cashback on Medicine orders?",
    type: 1,
    ans1: "Yes, based on the value of your order, a 5% cashback up to ₹200 will be credited for Medicine orders.",
  },
  {
    ques: "Is there also a new 40% Cashback on lab tests, over and above the existing 10% cashback?",
    type: 1,
    ans1: "Absolutely! All Plus members will continue to get the older benefit of 10% Cashback without using a coupon on their lab test bookings. You will now also be able to get a 40% additional cashback by using the code shown on your cart at the time of booking.",
  },
  {
    ques: "Is there a cap on the maximum amount that can be earned through the 10% cashback on Diagnostic Tests?",
    type: 1,
    ans1: "Yes, based on the value of your order, a 10% cashback up to ₹200 will be credited for Diagnostic Test orders.",
  },
  {
    ques: "Is there a cap on the maximum amount that can be earned through the 40% cashback on Lab Tests applied via coupon?",
    type: 1,
    ans1: "Yes, based on the value of your order, a 40% cashback up to ₹2000 will be credited for Lab Test orders.",
  },
  {
    ques: "Is free delivery applicable for all orders?",
    type: 1,
    ans1: "Free delivery will apply to the first 50 medicine orders you place via standard delivery during your membership period. The cart value for each order has to be above ₹499/- to qualify for free delivery. For priority delivery, extra charges will be applied. Certain packaging charges may also apply to PLUS orders. However, in cases where your order weighs more than 1 kg, standard delivery (based on the weight of your order) will be applicable. ",
  },
  {
    ques: "Are charges applicable on returns?",
    type: 1,
    ans1: "Extra charges may be applied to subsequent or future orders when customers make frequent return orders.",
  },
  {
    ques: "Can I cancel my PharmEasy Plus Membership?",
    type: 1,
    ans1: "No. Once enrolled, you will not be able to cancel your PharmEasy Plus membership.",
  },
  {
    ques: "Can I renew my PharmEasy Plus membership?",
    type: 1,
    ans1: "Yes, once your existing membership has expired, you will see an option to buy the membership again if you are eligible. However, PharmEasy Plus membership prices are subject to change.",
  },
  {
    ques: "Can I use other offers/coupons along with the Pharm Easy Plus Cashback?",
    type: 1,
    ans1: "Yes, you can use any other offers/coupons along with the PharmEasy Plus membership.",
  },
  {
    ques: "How do I avail Pharm Easy Plus cashback?",
    type: 1,
    ans1: "Cashback will be auto-applied on all allopathic medicine orders. No need to apply any coupon code. To avail benefits for Lab bookings, apply the coupon code shown exclusively to you on your cart to get the additional 40% Cashback on your order.",
  },
  {
    ques: "Is there a limit on the number of orders I can get PharmEasy Plus Cashback on?",
    type: 1,
    ans1: "Yes, this benefit is available on a maximum of 50 medicine orders and 50 lab tests booked during your membership.",
  },
  {
    ques: "How many Doctor Consultations can I avail through PharmEasy Plus Membership?",
    type: 1,
    ans1: "As a Plus member, you can avail 20 free doctor consultations during your membership period. Feel free to get in touch with our doctors whenever you are in need. We strongly advise that you take any medication only after consulting with a registered medical practitioner.",
  },
  {
    ques: "What's the process for consulting the doctor?",
    type: 1,
    ans1: "You can submit a request for doctor consultation after getting enrolled from your membership details page.",
  },
  {
    ques: "Can I get a faster delivery through PharmEasy Plus?",
    type: 1,
    ans1: "While we would love to provide faster delivery, this option is not available under the PharmEasy Plus membership right now.",
  },
  {
    ques: "Can I buy PharmEasy Plus via COD?",
    type: 1,
    ans1: "Yes, you can buy the PharmEasy Plus membership via COD only if you buy it along with your medicine order. For COD order, first add your medicines to cart and then select the Plus membership.",
  },
  {
    ques: "Can I avail the cashback on Diagnostics tests in all cities?",
    type: 1,
    ans1: "We are expanding rapidly. For now, you can avail this cashback only if our diagnostic services are available in your city.",
  },
  {
    ques: "Are there any products where plus benefits are not eligible?",
    type: 1,
    ans1: "Cashback benefits are not applicable on healthcare products.",
  },
  {
    ques: "Can PharmEasy revoke my membership at any time?",
    type: 1,
    ans1: "Yes, PharmEasy reserves the right, at its sole discretion, to add/alter/modify/change the terms or revoke your Plus membership with no prior notice at any given time.",
  },
  {
    ques: "Will I get a refund if Pharm Easy revokes my membership?",
    type: 1,
    ans1: "Yes, your PLUS membership fee will be reimbursed on a pro-rata basis for the remaining months.",
  },
  {
    ques: "Can my membership expire sooner than its expiry date?",
    type: 1,
    ans1: "PharmEasy reserves the right to revoke your Plus membership without any prior notice, if any fraudulent or suspicious activities have occurred from your membership account.",
  },
];
