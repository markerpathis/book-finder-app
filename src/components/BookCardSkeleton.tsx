import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const BookCardSkeleton = () => {
  return (
    <>
      <Card>
        <HStack>
          <Skeleton height="196px" width="50%" />
          <CardBody width="50%">
            <SkeletonText />
          </CardBody>
        </HStack>
      </Card>
    </>
  );
};

export default BookCardSkeleton;
