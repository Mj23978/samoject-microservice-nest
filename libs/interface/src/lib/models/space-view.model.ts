import { Field, ObjectType } from "@nestjs/graphql";
import { Space } from "./space.model";

@ObjectType("SpaceView", {
  isAbstract: true
})
export class SpaceView {
  @Field(() => String, {
    nullable: false
  })
  id!: string;

  @Field(() => Date, {
    nullable: false
  })
  createdAt!: Date;

  @Field(() => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @Field(() => String, {
    nullable: false
  })
  localId!: string;

  @Field(() => String, {
    nullable: false
  })
  spaceId!: string;

  space?: Space | null;
}
