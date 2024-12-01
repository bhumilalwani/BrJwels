import React from 'react';
import Link from 'next/link'; // Ensure to import Link from 'next/link'

const reviews = [
  {
    title: 'Beautiful!',
    description: 'Beautiful!',
    imageUrl:
      'https://assets.angara.com/bracelet/sb0425d/3mm-hsi2-diamond-yellow-gold-bracelet.jpg?width=256&quality=95',
    productUrl: '/p/graduated-bezel-set-diamond-bolo-bracelet-sb0425d',
    rating: 5,
    customerName: 'Robert V.',
    reviewDate: '29 Nov, 2024',
  },
  {
    title: 'Ring',
    description: 'Beautiful ring, so amazing.',
    imageUrl:
      'https://assets.angara.com/ring/sr1437d/5.1mm-iji1i2-diamond-p950-platinum-ring.jpg?width=256&quality=95',
    productUrl: '/p/solitaire-round-diamond-infinity-promise-ring-sr1437d',
    rating: 5,
    customerName: 'Brooklyn H.',
    reviewDate: '29 Nov, 2024',
  },
  {
    title: 'Beautiful!',
    description: 'Beautiful!',
    imageUrl:
      'https://assets.angara.com/bracelet/sb0425d/3mm-hsi2-diamond-yellow-gold-bracelet.jpg?width=256&quality=95',
    productUrl: '/p/graduated-bezel-set-diamond-bolo-bracelet-sb0425d',
    rating: 5,
    customerName: 'Robert V.',
    reviewDate: '29 Nov, 2024',
  },
  {
    title: 'Ring',
    description: 'Beautiful ring, so amazing.',
    imageUrl:
      'https://assets.angara.com/ring/sr1437d/5.1mm-iji1i2-diamond-p950-platinum-ring.jpg?width=256&quality=95',
    productUrl: '/p/solitaire-round-diamond-infinity-promise-ring-sr1437d',
    rating: 5,
    customerName: 'Brooklyn H.',
    reviewDate: '29 Nov, 2024',
  },
  {
    title: 'Beautiful!',
    description: 'Beautiful!',
    imageUrl:
      'https://assets.angara.com/bracelet/sb0425d/3mm-hsi2-diamond-yellow-gold-bracelet.jpg?width=256&quality=95',
    productUrl: '/p/graduated-bezel-set-diamond-bolo-bracelet-sb0425d',
    rating: 5,
    customerName: 'Robert V.',
    reviewDate: '29 Nov, 2024',
  },
  {
    title: 'Ring',
    description: 'Beautiful ring, so amazing.',
    imageUrl:
      'https://assets.angara.com/ring/sr1437d/5.1mm-iji1i2-diamond-p950-platinum-ring.jpg?width=256&quality=95',
    productUrl: '/p/solitaire-round-diamond-infinity-promise-ring-sr1437d',
    rating: 5,
    customerName: 'Brooklyn H.',
    reviewDate: '29 Nov, 2024',
  },
  {
    title: 'Beautiful!',
    description: 'Beautiful!',
    imageUrl:
      'https://assets.angara.com/bracelet/sb0425d/3mm-hsi2-diamond-yellow-gold-bracelet.jpg?width=256&quality=95',
    productUrl: '/p/graduated-bezel-set-diamond-bolo-bracelet-sb0425d',
    rating: 5,
    customerName: 'Robert V.',
    reviewDate: '29 Nov, 2024',
  },
  {
    title: 'Ring',
    description: 'Beautiful ring, so amazing.',
    imageUrl:
      'https://assets.angara.com/ring/sr1437d/5.1mm-iji1i2-diamond-p950-platinum-ring.jpg?width=256&quality=95',
    productUrl: '/p/solitaire-round-diamond-infinity-promise-ring-sr1437d',
    rating: 5,
    customerName: 'Brooklyn H.',
    reviewDate: '29 Nov, 2024',
  },
  // Add more reviews if needed
];

const CustomerReview = () => {
  return (
    <section
      className="section-gap flex flex-col items-center justify-center py-[10%] bg-gray-50"
      
    >
      <div className="container text-center px-4 sm:px-8">
        <div className="inner-container">
          <div className="section-heading mb-8">
            <h2 className="sm:text-2xl text-gray-800 text-xl font-semibold mb-2">What Customers Are Saying</h2>
           
          </div>
          <div className="review-block">
            <div className="slick-slider" dir="ltr">
              <div className="slick-list flex items-center justify-center">
                <div className="slick-track flex gap-6 overflow-x-auto scrollbar-hidden snap-x snap-mandatory">
                  {reviews.map((review, index) => (
                    <div
                      key={index}
                      className="review-card-wrapper flex-shrink-0 w-72 sm:w-80 h-auto bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-center snap-center"
                    >
                      <Link href={review.productUrl} className="text-blue-500 mb-4">
                        <img
                          alt={review.title}
                          src={review.imageUrl}
                          className="w-32 h-32 object-contain"
                          loading="lazy"
                        />
                      </Link>
                      <div className="title text-lg font-medium">{review.title}</div>
                      <div className="review-stars my-2">
                        <div className="star-rating">
                          <span className="half-star text-yellow-400">★★★★★</span>
                          <span className="full-star text-yellow-400" style={{ width: '100%' }}>
                            ★★★★★
                          </span>
                        </div>
                      </div>
                      <div className="customer-review text-gray-600 text-sm text-center">
                        {review.description}
                      </div>
                      <div className="customer-name text-gray-700 font-semibold mt-4">
                        {review.customerName}{' '}
                        <span className="text-gray-500 text-sm">({review.reviewDate})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
      <Link href="/b/customer-reviews" className="-ml-[10%] mt-[2%] text-blue-500 underline">
              Reviews
            </Link>
    </section>
  );
};

export default CustomerReview;
