import React, { useEffect, useState } from "react";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";


const Review = () => {
  const [reviewData, setReviewData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getReview = async () => {
    try {
      const response = await axios.get(
        "https://admin.tomedes.com/api/v1/get-reviews?page=1"
      );
      setReviewData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log("Error in Data", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getReview();
  }, []);

  return (
    <section className="review_sec">
      <div className="rev_head">
        <h2>What Our Customers Say</h2>
      </div>

      <div className="review_Cont">
      {loading ? ( 
          <div className="loading">
            <h2>Loading Reviews...</h2>
          </div>
        ) : (
        <OwlCarousel
          className="owl-theme"
          loop={true}
          nav={false}
          dots={false}
          autoplay
          autoplayTimeout={3000}
          responsive={{
            0: {
              items: 1,
              nav: false,
              loop: true,
            },
            600: {
              items: 1,
              nav: false,
              loop: true,
            },
            1000: {
              items: 1,
              nav: false,
              loop: true,
            },
            1400: {
              items: 2,
              nav: false,
              loop: true,
            },
          }}
        >
          {reviewData.map((value, index) => (
            <div className="main_ClientData" key={index}>
              <div className="client_inner">
                <div className="quoteBlock">
                  <img src="Assets/Images/quote.png" alt="quote" />
                </div>

                <div className="reviewMain">
                  <p>{value.Reviews}</p>
                </div>
              </div>

              <div className="client_NameBlock">
              <div className="clientImg_Div">
                <img src="Assets/Images/ClientImg.png" alt="ClientImage" />
              </div>
                <div className="name_plat">
                  <h6>{value.Name}</h6>
                  <p>{value.Platform}</p>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
        )}
      </div>
    </section>
  );
};

export default Review;
