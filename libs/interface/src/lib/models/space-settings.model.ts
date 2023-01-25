import { Field, ObjectType } from "@nestjs/graphql";
import { Space } from "./space.model";

@ObjectType("SpaceSettings", {
  isAbstract: true
})
export class SpaceSettings {
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
