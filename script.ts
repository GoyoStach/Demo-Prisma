import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });

const main = async () => {
  console.log(
    "Start to use this demo by adding on of the function present in the script.ts file !"
  );
};

const createOne = async () => {
  const users = await prisma.user.create({
    data: {
      name: "Guillaume",
      email: "guillaume.excoffier86@gmail.com",
      age: 23,
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    include: {
      userPreference: true,
    },
  });
  console.log(users);
};

const createMany = async () => {
  const users = await prisma.user.createMany({
    data: [
      {
        name: "Helia",
        email: "helia.eldog1@gmail.com",
        age: 12,
      },
      {
        name: "Helia",
        email: "helia.eldog2@gmail.com",
        age: 18,
      },
    ],
  });
  console.log(users);
};

const deleteMany = async () => {
  await prisma.user.deleteMany();
};

const findAll = async () => {
  const users = await prisma.user.findMany();
  console.log(users);
};

const findUnique = async () => {
  const user = await prisma.user.findUnique({
    where: {
      email: "guillaume.excoffier86@gmail.com",
    },
  });
  console.log(user);
};

const findUniqueComposite = async () => {
  const user = await prisma.user.findUnique({
    where: {
      age_name: {
        age: 23,
        name: "Guillaume",
      },
    },
  });
  console.log(user);
};

const findMany = async () => {
  const users = await prisma.user.findMany({
    where: {
      name: "Helia",
    },
  });
  console.log(users);
};

const paginationExample = async () => {
  const users = await prisma.user.findMany({
    where: {
      name: "Helia",
    },
    take: 2,
    skip: 1,
  });
  console.log(users);
};

const findManyIn = async () => {
  const users = await prisma.user.findMany({
    where: {
      name: {
        in: ["Guillaume", "Helia"],
      },
    },
  });
  console.log(users);
};

const andOnWhere = async () => {
  const users = await prisma.user.findMany({
    where: {
      AND: {
        name: {
          in: ["Guillaume", "Helia"],
        },
        email: { contains: "eldog" },
      },
    },
  });
  console.log(users);
};

const nestedQueries = async () => {
  const users = await prisma.user.findMany({
    where: {
      writtenPosts: {
        every: {
          title: { startsWith: "Demo" },
        },
      },
    },
  });
  console.log(users);
};

const reverseNestedQueries = async () => {
  const users = await prisma.post.findMany({
    where: {
      author: {
        is: {
          age: 12,
        },
      },
    },
  });
  console.log(users);
};

const update = async () => {
  const users = await prisma.user.update({
    where: {
      email: "helia.eldog2@gmail.com",
    },
    data: {
      email: "helia.eldog3@gmail.com",
    },
  });
  console.log(users);
};

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
