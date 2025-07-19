const HowItWorks = () => {
  return (
    <section className="max-w-4xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-extrabold text-amber-800 mb-10 text-center tracking-wide">
        How It Works
      </h2>
      <div className="grid gap-10 md:grid-cols-3">
        <div className="text-center p-6 border border-amber-200 rounded-lg shadow-md hover:shadow-lg transition bg-amber-50">
          <div className="mb-4 text-5xl font-bold text-amber-600">1</div>
          <h3 className="text-xl font-semibold mb-3 text-amber-900">
            Donate Food
          </h3>
          <p className="text-amber-700">
            Easily donate your extra food by submitting details of what you want
            to share.
          </p>
        </div>

        <div className="text-center p-6 border border-amber-200 rounded-lg shadow-md hover:shadow-lg transition bg-amber-50">
          <div className="mb-4 text-5xl font-bold text-amber-600">2</div>
          <h3 className="text-xl font-semibold mb-3 text-amber-900">
            Pickup & Delivery
          </h3>
          <p className="text-amber-700">
            Volunteers coordinate with donors and recipients to pick up and
            deliver fresh food.
          </p>
        </div>

        <div className="text-center p-6 border border-amber-200 rounded-lg shadow-md hover:shadow-lg transition bg-amber-50">
          <div className="mb-4 text-5xl font-bold text-amber-600">3</div>
          <h3 className="text-xl font-semibold mb-3 text-amber-900">
            Enjoy & Support
          </h3>
          <p className="text-amber-700">
            Recipients receive wholesome meals, reducing waste and fighting
            hunger in the community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
