#include <assert.h>
#include <limits.h>
#include <math.h>
#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_SIZE 100

char* readline();

typedef struct SinglyLinkedListNode SinglyLinkedListNode;
typedef struct SinglyLinkedList SinglyLinkedList;

struct SinglyLinkedListNode {
    int data;
    SinglyLinkedListNode* next;
};

struct SinglyLinkedList {
    SinglyLinkedListNode* head;
    SinglyLinkedListNode* tail;
};

SinglyLinkedListNode* create_singly_linked_list_node(int node_data) {
    SinglyLinkedListNode* node = malloc(sizeof(SinglyLinkedListNode));

    node->data = node_data;
    node->next = NULL;

    return node;
}

void insert_node_into_singly_linked_list(SinglyLinkedList** singly_linked_list, int node_data) {
    SinglyLinkedListNode* node = create_singly_linked_list_node(node_data);

    if (!(*singly_linked_list)->head) {
        (*singly_linked_list)->head = node;
    } else {
        (*singly_linked_list)->tail->next = node;
    }

    (*singly_linked_list)->tail = node;
}

void print_singly_linked_list(SinglyLinkedListNode* node, char* sep, FILE* fptr) {
    while (node) {
        fprintf(fptr, "%d", node->data);

        node = node->next;

        if (node) {
            fprintf(fptr, "%s", sep);
        }
    }
}

void free_singly_linked_list(SinglyLinkedListNode* node) {
    while (node) {
        SinglyLinkedListNode* temp = node;
        node = node->next;

        free(temp);
    }
}

// Complete the has_cycle function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode* next;
 * };
 */

/*
Implementação ingênua:
- Percorre os nós LinkedList 
- Armazena o endereço de cada nó
- Ao chegar em nó novo, verifica se ele já foi registrado, se sim, tem um ciclo

bool has_cycle(SinglyLinkedListNode* head) {
  if (head != NULL) {
    printf("head.address: %p \n", head);
    printf("head.data: %i \n", head->data);
    printf("head.next: %p \n\n", head->next);

    if (head->next != NULL) {
      printf("next.address: %p \n", head->next);
      printf("next.data: %i \n", (head->next)->data);
      printf("next.data: %p \n\n", (head->next)->next);

      if (head->next->next != NULL) {
        printf("next.address: %p \n", head->next->next);
        printf("next.data: %i \n", (head->next->next)->data);
        printf("next.data: %p \n\n", (head->next->next)->next);

        if (head->next->next->next != NULL) {
          printf("next.address: %p \n", head->next->next->next);
          printf("next.data: %i \n", (head->next->next->next)->data);
          printf("next.data: %p \n\n", (head->next->next->next)->next);
        }
      }
    }
  }
  printf("====\n");

  if (head == NULL) {
    return false;
  }

  bool result = false;

  SinglyLinkedListNode *traversedNodes[MAX_SIZE];
  int traversedNodesNextIndex = 0;

  traversedNodes[traversedNodesNextIndex] = head;
  traversedNodesNextIndex++;

  while (!result) {
    SinglyLinkedListNode* lastTraversedNode = traversedNodes[traversedNodesNextIndex - 1];
    printf("\n\nverificando se o %p tem loop\n", lastTraversedNode->next);
    if (lastTraversedNode->next == NULL) {
      break;
    }

    int lastTraversedNodeIndex = traversedNodesNextIndex - 1;
    for (int i = 0; i <= lastTraversedNodeIndex; i++) {
      printf("debug traversedNodes[%i]: %p\n", i, traversedNodes[i]);

      if (traversedNodes[i] == lastTraversedNode->next) {
        printf("ciclo detectado: %p eh igual a %p\n", traversedNodes[i], lastTraversedNode->next);
        result = true;
        break;
      } else {
        traversedNodes[traversedNodesNextIndex] = lastTraversedNode->next;
        traversedNodesNextIndex++;
      }
    }
  }

  return result;
}
*/

// Implementação correta utilizando Algoritmo de busca-cíclica de Floyd (Floyd's cycle-finding algorithm)
bool has_cycle(SinglyLinkedListNode* head) {
  if(head == NULL || head->next == NULL){
    return 0;
  }

  SinglyLinkedListNode *slow = head, *fast = head;

  while(fast !=NULL && fast->next != NULL){
    slow = slow->next;
    fast = fast->next->next;

    if(slow == fast){
      return 1;
    }
  }

  return 0;
}

int main()
{
    FILE* fptr = fopen(getenv("OUTPUT_PATH"), "w");

    char* tests_endptr;
    char* tests_str = readline();
    int tests = strtol(tests_str, &tests_endptr, 10);

    if (tests_endptr == tests_str || *tests_endptr != '\0') { exit(EXIT_FAILURE); }

    for (int tests_itr = 0; tests_itr < tests; tests_itr++) {
        char* index_endptr;
        char* index_str = readline();
        int index = strtol(index_str, &index_endptr, 10);

        if (index_endptr == index_str || *index_endptr != '\0') { exit(EXIT_FAILURE); }

        SinglyLinkedList* llist = malloc(sizeof(SinglyLinkedList));
        llist->head = NULL;
        llist->tail = NULL;

        char* llist_count_endptr;
        char* llist_count_str = readline();
        int llist_count = strtol(llist_count_str, &llist_count_endptr, 10);

        if (llist_count_endptr == llist_count_str || *llist_count_endptr != '\0') { exit(EXIT_FAILURE); }

        for (int i = 0; i < llist_count; i++) {
            char* llist_item_endptr;
            char* llist_item_str = readline();
            int llist_item = strtol(llist_item_str, &llist_item_endptr, 10);

            if (llist_item_endptr == llist_item_str || *llist_item_endptr != '\0') { exit(EXIT_FAILURE); }

            insert_node_into_singly_linked_list(&llist, llist_item);
        }
      
      	SinglyLinkedListNode* extra = create_singly_linked_list_node(-1);
      	SinglyLinkedListNode* temp = llist->head;
      
      	for (int i = 0; i < llist_count; i++) {
            if (i == index) {
          		extra = temp;
            }
          	
          	if (i != llist_count-1) {
          		temp = temp->next;
            }
        }
      
      	temp->next = extra;

        bool result = has_cycle(llist->head);

        fprintf(fptr, "%d\n", result);
    }

    fclose(fptr);

    return 0;
}

char* readline() {
    size_t alloc_length = 1024;
    size_t data_length = 0;
    char* data = malloc(alloc_length);

    while (true) {
        char* cursor = data + data_length;
        char* line = fgets(cursor, alloc_length - data_length, stdin);

        if (!line) { break; }

        data_length += strlen(cursor);

        if (data_length < alloc_length - 1 || data[data_length - 1] == '\n') { break; }

        size_t new_length = alloc_length << 1;
        data = realloc(data, new_length);

        if (!data) { break; }

        alloc_length = new_length;
    }

    if (data[data_length - 1] == '\n') {
        data[data_length - 1] = '\0';
    }

    data = realloc(data, data_length);

    return data;
}

