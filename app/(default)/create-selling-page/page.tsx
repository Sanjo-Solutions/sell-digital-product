export const metadata = {
  title: "Create selling page",
}

export default function Page() {
  return (
    <form>
      <h1 id="create-selling-page">Create selling page</h1>
      <div className="mb-3">
        <label htmlFor="file" className="form-label">
          The file you'd like to sell
        </label>
        <input id="file" type="file" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          The price you'd like to sell the file for
        </label>
        <div className="input-group">
          <input id="price" type="text" className="form-control" />
          <span className="input-group-text" id="basic-addon2">
            €
          </span>
        </div>
      </div>
      <h2 id="setting-up-checkout-and-payment-processing">
        Setting up checkout and payment processing
      </h2>
      <p>
        For checkout and payment processing Stripe can be used. You can sign up
        on
        <a href="https://stripe.com/en-de/payments" target="_blank">
          their website
        </a>
        .
      </p>
      <h3>Giving us access to your Stripe account</h3>
      <p>
        We require access to your Stripe account, so that we can set up the
        Stripe resources for selling the product.
      </p>
      <h2 id="setting-up-download-page-and-purchased-email">
        Setting up download page and purchased e-mail
      </h2>
      <p>
        For those features, AWS can be used. Please sign up to
        <a href="https://aws.amazon.com/" target="_blank">
          AWS
        </a>
        .
      </p>
      <h3>Giving us access to your AWS account</h3>
      <p>
        We require access to your account, so that we can set up the AWS
        resources for selling the product.
      </p>
      <ol>
        <li>
          <a
            href="https://us-east-1.console.aws.amazon.com/iamv2/home#/roles/create"
            target="_blank"
          >
            Create role
          </a>
          <ol>
            <li>
              Step 1: Select trusted entity:
              <ol>
                <li>Trusted entity type: AWS account</li>
                <li>Another AWS account</li>
                <li>Account ID: &lt;ACCOUNT_ID&gt;</li>
                <li>Requires external ID: yes</li>
                <li>External ID: &lt;EXTERNAL_ID&gt;</li>
                <li>Next</li>
              </ol>
            </li>
            <li>
              Step 2: Add permissions:
              <ol>
                <li>Check "AdministratorAccess"</li>
                <li>Next</li>
              </ol>
            </li>
            <li>
              Step 3: Name, review and create
              <ol>
                <li>Role name: SellDigitalProduct</li>
                <li>Create role</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>
          <a
            href="https://us-east-1.console.aws.amazon.com/iamv2/home#/roles/details/SellDigitalProduct?section=permissions"
            target="_blank"
          >
            Open the role
          </a>
        </li>
        <li>Copy the ARN</li>
        <li>Give us the ARN</li>
      </ol>
      <div className="mb-3">
        <label htmlFor="arn" className="form-label">
          ARN
        </label>
        <input
          id="arn"
          type="text"
          className="form-control"
          pattern="arn:aws:iam::\d+:role/.+"
          placeholder="arn:aws:iam::XXXXXXXXXXXX:role/SellDigitalProduct"
        />
      </div>
      <div className="text-end">
        <button type="submit" className="btn btn-primary">
          Create selling page
        </button>
      </div>
    </form>
  )
}
