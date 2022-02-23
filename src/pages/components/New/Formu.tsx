import { Card, Form, Grid, Button, Icon, Confirm } from "semantic-ui-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";


export default function Formu(){

return(

    <Form>
                <Form.Field>
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    placeholder="Write a title"
                    name="title"
                    autoFocus
                  />
                </Form.Field>
                <Form.Field>
                  <label htmlFor="description">Description:</label>
                  <textarea
                    name="description"
                    id="description"
                    rows={2}
                    placeholder="Write a Description"
                  ></textarea>
                </Form.Field>
                  <Button color="teal" >
                    <Icon name="save" />
                    Update
                  </Button>

              </Form>

);


}