# Giving us access to your AWS account

We require access to your account, so that we can set up the AWS resources for selling the product.

1. [Create role](https://us-east-1.console.aws.amazon.com/iamv2/home#/roles/create)
   1. Step 1: Select trusted entity:
      1. Trusted entity type: AWS account
      2. Another AWS account
      3. Account ID: \<ACCOUNT_ID>
      4. Requires external ID: yes
      5. External ID: \<EXTERNAL_ID>
      6. Next
   2. Step 2: Add permissions:
      1. Check "AdministratorAccess"
      2. Next
   3. Step 3: Name, review and create
      1. Role name: SellDigitalProduct
      2. Create role
2. [Open the role](https://us-east-1.console.aws.amazon.com/iamv2/home#/roles/details/SellDigitalProduct?section=permissions)
3. Copy the ARN
4. Give us the ARN
