import {User} from '../../src/modules/db';

const run = async () => {
    await User.createMany({
      data: [
        {
          email: 'super-admin@org.com',
          country: 'IN',
          mobile: '1929747489',
          name: 'Super Admin',
        },
        {
          email: 'admin@org.com',
          country: 'IN',
          mobile: '1929757489',
          name: 'Admin',
        },
      ],
    });
}

if (require.main === module) {
    run().then(() => {
        console.log('Data Seed Completed!')
        process.exit();
    })
}